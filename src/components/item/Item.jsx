const Item = ({ id, img, title, stock }) => {
	return (
		<article className='card-item' key={id}>
			<picture>
				<img className='card-item__img' src={img} alt='' />
			</picture>
			<p className='card-item__description'>{title}</p>
			<a className='btn detail-product' href='#'>
				Ver detalle del producto
			</a>
			<p className='card-item__stock'>Disponible: {stock}</p>
		</article>
	);
};

export default Item;
