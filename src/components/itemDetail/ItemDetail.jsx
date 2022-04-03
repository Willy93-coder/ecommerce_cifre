import ItemCount from '../itemCount/ItemCount';
import KeepBuying from '../keepBuying/KeepBuying';
import { useState } from 'react';

const ItemDetail = ({ id, img, title, description, price, stock }) => {
	const [compra, setCompra] = useState('aniadir');
	const onAdd = (item) => {
		if (item === 1) {
			console.log(`Has añadido ${item} producto al carrito`);
			setCompra('buttons');
		} else {
			console.log(`Has añadido ${item} productos al carrito`);
			setCompra('buttons');
		}
	};

	return (
		<div className='detail' key={id} id={id}>
			<picture>
				<img className='detail__img' src={img} alt='' />
			</picture>
			<div className='detail__text'>
				<h3 className='detail__text__title'>{title}</h3>
				<p className='detail__text__description'>{description}</p>
				<p className='detail__text__price'>${price}</p>
				{compra === 'aniadir' ? (
					<ItemCount inicial={1} onAdd={onAdd} stock={stock} />
				) : (
					<KeepBuying />
				)}
			</div>
		</div>
	);
};

export default ItemDetail;
