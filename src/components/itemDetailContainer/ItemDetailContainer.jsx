import ItemDetail from '../itemDetail/ItemDetail';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = () => {
	const [item, setItem] = useState({});
	// const [stock, setStock] = useState({});
	const [loading, setLoading] = useState(true);
	const { detalleId } = useParams();

	// const urlItem = `https://fakestoreapi.com/products/${detalleId}`;

	const getProductosDB = async () => {
		try {
			const querydb = getFirestore();
			const queryProd = doc(querydb, 'productos', detalleId);
			const product = await getDoc(queryProd);

			// const respuesta = await fetch(urlItem);
			// const data = await respuesta.json();
			setItem({ id: product.id, ...product.data() });
			// setStock(data.rating);
			setLoading(false);
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
			{loading ? (
				<p className='loading'>Cargando...</p>
			) : (
				<div className='detail-container' key={item.id}>
					<ItemDetail
						id={item.id}
						img={item.image}
						title={item.title}
						description={item.description}
						price={item.price}
						stock={item.stock}
					/>
				</div>
			)}
		</>
	);
};

export default ItemDetailContainer;
