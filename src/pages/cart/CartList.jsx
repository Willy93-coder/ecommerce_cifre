import { useCartContext } from '../../context/cartContext';

const CartList = () => {
	const { cartList, removeCart } = useCartContext();

	return (
		<div>
			{cartList.map((prod) => (
				<div key={prod.id}>
					<img src={prod.img} />
					<h3>{prod.title}</h3>
					<p>{prod.description}</p>
					<p>${prod.price * prod.cantidad}</p>
					<p>Cantidad: {prod.cantidad}</p>
				</div>
			))}
			<button onClick={removeCart} className='btn'>
				Vaciar el carrito
			</button>
		</div>
	);
};

export default CartList;
