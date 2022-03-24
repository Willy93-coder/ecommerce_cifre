import ItemCount from '../itemCount/ItemCount';

const ItemDetail = ({ id, img, title, description }) => {
	const onAdd = (item) => {
		if (item === 1) {
			alert(`Has añadido ${item} producto al carrito`);
		} else {
			alert(`Has añadido ${item} productos al carrito`);
		}
	};

	return (
		<div className='detail' key={id}>
			<picture>
				<img
					className='detail__img'
					src='https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/ee9a5d47-accb-45a4-806f-82c1e9cb364d/air-force-1-pixel-womens-shoes-VnWf3q.png'
					alt=''
				/>
			</picture>
			<div className='detail__text'>
				<h3 className='detail__text__title'>Air Force</h3>
				<p className='detail__text__description'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam.
				</p>
				<ItemCount />
			</div>
		</div>
	);
};

export default ItemDetail;
