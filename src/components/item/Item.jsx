const Item = ({ id, img, title, stock }) => {
	return (
		<article className='card-item' key={id}>
			<div className='card-item__img'>
				<img className='item-img' src={img} alt='' />
			</div>
			<p className='card-item__description'>{title}</p>
			<div>
				<a className='btn detail-product' href='#'>
					Ver detalle del producto
				</a>
				<p className='card-item__stock'>Disponible: {stock}</p>
			</div>
		</article>
	);
};

export default Item;
