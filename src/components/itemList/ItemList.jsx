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
	const [products, setProducts] = useState([]);
	const { categoryId } = useParams();

	useEffect(() => {
		if (categoryId) {
			const getProductosDB = async () => {
				try {
					const querydb = getFirestore();
					const queryCollection = collection(querydb, 'productos');
					const queryFilter = query(
						queryCollection,
						where('categoryId', '==', categoryId)
					);
					const responsedb = await getDocs(queryFilter);
					const items = responsedb;
					setProducts(
						items.docs.map((item) => ({ id: item.id, ...item.data() }))
					);
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
					setProducts(
						items.docs.map((item) => ({ id: item.id, ...item.data() }))
					);
				} catch (error) {
					console.log(error);
					alert('No podemos enseñar los productos ahora mismo');
				}
			};
			getProductosDB();
		}
	}, [categoryId]);

	return (
		<section className='container'>
			{products.length ? (
				<>
					{products.map((product) => {
						return (
							<div key={product.id} className='card-container'>
								<Item
									id={product.id}
									img={product.image}
									title={product.title}
									stock={product.stock}
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
