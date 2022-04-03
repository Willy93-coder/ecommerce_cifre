import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import CartWidget from '../cartWidget/CartWidget';

const Nav = () => {
	return (
		<ul className='menu'>
			<li className='menu__logo'>
				<NavLink to='/'>MS</NavLink>
			</li>
			<li className='menu__item'>
				<NavLink to='/'>Inicio</NavLink>
			</li>
			<li className='menu__item'>
				<NavLink to='/categoria/electronics'>Electrónica</NavLink>
			</li>
			<li className='menu__item'>
				<NavLink to='/categoria/jewelery'>Visutería</NavLink>
			</li>
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

export default Nav;
