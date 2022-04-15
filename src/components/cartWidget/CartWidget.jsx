import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';

const CartWidget = () => {
	const { cart } = useCartContext();
	console.log(cart);

	return (
		<>
			<Link to='/cart' className='cart-icon'>
				<div className='qty-container'>
					<FaShoppingCart />
					<p className={cart === 0 ? 'no-display' : 'qty'}>{cart}</p>
				</div>
			</Link>
		</>
	);
};

export default CartWidget;
