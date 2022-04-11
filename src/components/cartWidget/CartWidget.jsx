import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CartWidget = () => {
	return (
		<>
			<Link to={'/cart'} className='cart-icon'>
				<div className='qty-container'>
					<FaShoppingCart />
					<p className='qty'>0</p>
				</div>
			</Link>
		</>
	);
};

export default CartWidget;
