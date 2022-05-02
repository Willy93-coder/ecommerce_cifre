import {
	collection,
	getDocs,
	getFirestore,
	query,
	where,
} from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Item from '../item/Item';

const ItemList = () => {
	const [productos, setProductos] = useState([]);
	const { categoriaId } = useParams();

	// const API = 'https://fakestoreapi.com/products';

	useEffect(() => {
		if (categoriaId) {
			const getProductosDB = async () => {
				try {
					const querydb = getFirestore();
					const queryCollection = collection(querydb, 'productos');
					const queryFilter = query(
						queryCollection,
						where('categoryId', '==', categoriaId)
					);
					const responsedb = await getDocs(queryFilter);
					const items = responsedb;
					setProductos(
						items.docs.map((item) => ({ id: item.id, ...item.data() }))
					);
					// const respuesta = await fetch(API);
					// const data = await respuesta.json();
					// setProductos(data.filter((item) => item.category === categoriaId));
				} catch (error) {
					console.log(error);
					alert('No podemos enseñar los productos ahora mismo');
				}
			};
			getProductosDB();
		} else {
			const getProductosDB = async () => {
				try {
					const querydb = getFirestore();
					const queryCollection = collection(querydb, 'productos');
					const responsedb = await getDocs(queryCollection);
					const items = responsedb;
					setProductos(
						items.docs.map((item) => ({ id: item.id, ...item.data() }))
					);
					// const respuesta = await fetch(API);
					// const data = await respuesta.json();
					// setProductos(data);
				} catch (error) {
					console.log(error);
					alert('No podemos enseñar los productos ahora mismo');
				}
			};
			getProductosDB();
		}
	}, [categoriaId]);

	return (
		<section className='container'>
			{productos.length ? (
				<>
					{productos.map((producto) => {
						return (
							<div key={producto.id} className='card-container'>
								<Item
									id={producto.id}
									img={producto.image}
									title={producto.title}
									stock={producto.stock}
								/>
							</div>
						);
					})}
				</>
			) : (
				<p>Cargando página...</p>
			)}
		</section>
	);
};

export default ItemList;
