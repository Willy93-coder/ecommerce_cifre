import { FaBars } from 'react-icons/fa';
import CartWidget from '../cartWidget/CartWidget';

const NavLinks = () => {
	return (
		<ul className='menu'>
			<li className='menu__logo'>MS</li>
			<li className='menu__item'>Inicio</li>
			<li className='menu__item'>Electrónica</li>
			<li className='menu__item'>Visutería</li>
			<li className='menu__item'>
				<CartWidget />
			</li>
			<li className='menu__toggle'>
				<button>
					<FaBars className='menu__toggle__btn' id='toggle' />
				</button>
			</li>
		</ul>
	);
};

export default NavLinks;
