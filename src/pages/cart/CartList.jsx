import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import OrderPopUp from '../../components/orderPopUp/OrderPopUp';
import { useState } from 'react';

const CartList = () => {
	const { cartData, price, deleteProductById, removeCart } = useCartContext();
	const [orderId, setOrderId] = useState('');
	const [openModal, setOpenModal] = useState(false);

	const cartDataList = Object.keys(cartData).map((k) => cartData[k]);

	const generateOrder = async (e) => {
		try {
			e.preventDefault();
			let order = {};

			order.buyer = {
				name: 'Guillermo',
				email: 'guillermo@gmail.com',
				phone: '027987569',
			};

			order.total = price;
			order.items = cartDataList.map((item) => {
				const id = item.id;
				const name = item.title;
				const price = item.price * item.quantity;

				return { id, name, price };
			});

			// Creación documento en firebase
			const db = getFirestore();
			const queryCollection = collection(db, 'orders');
			const queryOrder = await addDoc(queryCollection, order);
			console.log(queryOrder);
			const queryOrderId = queryOrder.id;
			console.log(queryOrderId);
			setOpenModal(true);
			setOrderId(queryOrderId);
		} catch (error) {
			console.log(error);
			alert('No se ha podido realizar el pedido');
		}
	};

	return (
		<div className='product-container'>
			{cartDataList.map((item) => (
				<div key={item.id} className='cart-product'>
					<div className='cart-product__img'>
						<img src={item.img} className='product-img' />
					</div>
					<div>
						<h3 className='cart-product__title'>{item.title}</h3>
						<p className='cart-product__description'>{item.description}</p>
						<p className='cart-product__price'>${item.price}</p>
						<p className='cart-product__qty'>Cantidad: {item.quantity}</p>
					</div>
					<div>
						<button onClick={() => deleteProductById(item.id)} className='btn'>
							Eliminar
						</button>
					</div>
				</div>
			))}

			{Object.keys(cartData).length !== 0 ? (
				<div className='cart-product__btn'>
					<button onClick={removeCart} className='btn btn-product'>
						Vaciar el carrito
					</button>
					<button onClick={generateOrder} className='btn terminar'>
						Terminar compra
					</button>
					<OrderPopUp
						open={openModal}
						onClose={() => setOpenModal(false)}
						orderId={orderId}
					/>
					<p className='total-price'>Total: ${price}</p>
				</div>
			) : (
				<>
					<h3>Todavía no has añadido ningún artículo a tu carrito</h3>
					<Link to='/' className='btn'>
						Ver productos
					</Link>
				</>
			)}
		</div>
	);
};

export default CartList;
