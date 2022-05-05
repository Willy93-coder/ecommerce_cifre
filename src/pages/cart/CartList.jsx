import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';
import { useState } from 'react';
import Form from '../../components/form/Form';

const CartList = () => {
	const { cartData, price, deleteProductById, removeCart } = useCartContext();
	const [activeForm, setActiveForm] = useState(false);

	const cartDataList = Object.keys(cartData).map((k) => cartData[k]);

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
				<>
					<div className='cart-product__btn'>
						<button onClick={removeCart} className='btn btn-product'>
							Vaciar el carrito
						</button>
						<button
							onClick={() => setActiveForm(true)}
							className='btn terminar'
						>
							Terminar compra
						</button>
						<p className='total-price'>Total: ${price}</p>
					</div>
					<Form active={activeForm} />
				</>
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
