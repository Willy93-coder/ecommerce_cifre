import ItemCount from '../itemCount/ItemCount';

const ItemDetail = ({ id, img, title, description, price }) => {
	const onAdd = (item) => {
		if (item === 1) {
			alert(`Has añadido ${item} producto al carrito`);
		} else {
			alert(`Has añadido ${item} productos al carrito`);
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
				<ItemCount inicial={1} onAdd={onAdd} />
			</div>
		</div>
	);
};

export default ItemDetail;
