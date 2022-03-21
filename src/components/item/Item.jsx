import ItemCount from '../itemCount/ItemCount';

const Item = ({ id, name, description, stock }) => {
	const onAdd = (item) => {
		if (item === 1) {
			alert(`Has añadido ${item} producto al carrito`);
		} else {
			alert(`Has añadido ${item} productos al carrito`);
		}
	};

	return (
		<article className='card-item'>
			<h3 className='card-item__title'>{name}</h3>
			<p className='card-item__description'>{description}</p>
			<ItemCount inicial={1} stock={stock} onAdd={onAdd} />
		</article>
	);
};

export default Item;
