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

	const [buy, setBuy] = useState('add');
	const onAdd = (quantity) => {
		addToCart(myProduct, quantity);
		setBuy('buttons');
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
				{buy === 'add' ? (
					<ItemCount initial={1} onAdd={onAdd} stock={stock} />
				) : (
					<KeepBuying />
				)}
			</div>
		</div>
	);
};

export default ItemDetail;
