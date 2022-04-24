import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';

const CartWidget = () => {
	const { cartQty } = useCartContext();

	return (
		<>
			<Link to='/cart' className='cart-icon'>
				<div className='qty-container'>
					<FaShoppingCart />
					<p className={cartQty === 0 ? 'no-display' : 'qty'}>{cartQty}</p>
				</div>
			</Link>
		</>
	);
};

export default CartWidget;
