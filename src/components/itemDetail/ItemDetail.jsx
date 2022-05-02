import { useState } from 'react';
import { useCartContext } from '../../context/cartContext';

import ItemCount from '../itemCount/ItemCount';
import KeepBuying from '../cart/KeepBuying';

const ItemDetail = ({ id, img, title, description, price, stock }) => {
	const { addToCart } = useCartContext();
	const myProduct = {
		id,
		img,
		title,
		description,
		price,
		stock,
	};

	const [compra, setCompra] = useState('aniadir');
	const onAdd = (quantity) => {
		addToCart(myProduct, quantity);
		setCompra('buttons');
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
