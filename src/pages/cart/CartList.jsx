import { useCartContext } from '../../context/cartContext';

const CartList = () => {
	const { cartList, deleteProductId, removeCart } = useCartContext();

	console.log(cartList);

	return (
		<div className='product-container'>
			{cartList.map((prod) => (
				<div key={prod.id} className='cart-product'>
					<div className='cart-product__img'>
						<img src={prod.img} className='product-img' />
					</div>
					<div>
						<h3 className='cart-product__title'>{prod.title}</h3>
						<p className='cart-product__description'>{prod.description}</p>
						<p className='cart-product__price'>${prod.price * prod.quantity}</p>
						<p className='cart-product__qty'>Cantidad: {prod.quantity}</p>
					</div>
					<div>
						<button onClick={() => deleteProductId(prod.id)} className='btn'>
							Eliminar producto
						</button>
					</div>
				</div>
			))}
			<div className='cart-product__btn'>
				<button onClick={removeCart} className='btn btn-product'>
					Vaciar el carrito
				</button>
				<button className='btn terminar'>Terminar compra</button>
			</div>
		</div>
	);
};

export default CartList;
