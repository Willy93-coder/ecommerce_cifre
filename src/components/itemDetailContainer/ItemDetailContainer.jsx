import ItemDetail from '../itemDetail/ItemDetail';
import { useState, useEffect } from 'react';

const ItemDetailContainer = () => {
	const [item, setItem] = useState({});

	const urlItem = 'https://fakestoreapi.com/products/1';

	const getProductosDB = async () => {
		try {
			const respuesta = await fetch(urlItem);
			const data = await respuesta.json();
			setItem(data);
		} catch (error) {
			console.log(error);
			alert('No podemos enseñar el producto ahora mismo');
		}
	};

	useEffect(() => {
		getProductosDB();
	}, []);

	return (
		<>
			<div className='detail-container' key={item.id}>
				<ItemDetail
					img={item.image}
					title={item.title}
					description={item.description}
					price={item.price}
				/>
			</div>
		</>
	);
};

export default ItemDetailContainer;