const Item = ({ id, img, description, stock }) => {
	const onAdd = (item) => {
		if (item === 1) {
			alert(`Has añadido ${item} producto al carrito`);
		} else {
			alert(`Has añadido ${item} productos al carrito`);
		}
	};

	return (
		<article className='card-item' key={id}>
			<picture>
				<img className='card-item__img' src={img} alt='' />
			</picture>
			<p className='card-item__description'>{description}</p>
			<a className='btn detail-product' href='#'>
				Ver detalle del producto
			</a>
			<p className='card-item__stock'>Disponible: {stock}</p>
		</article>
	);
};

export default Item;
