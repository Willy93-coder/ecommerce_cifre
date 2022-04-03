import { Link } from 'react-router-dom';

const KeepBuying = () => {
	return (
		<div className='container-keepbuying'>
			<Link to={'/'} className='btn btn-seguir'>
				Seguir comprando
			</Link>
			<Link to={'/cart'} className='btn btn-carrito'>
				Ir al carrito
			</Link>
		</div>
	);
};

export default KeepBuying;
