import { useState, useEffect } from 'react';
import Item from '../item/Item';

const ItemList = () => {
	const [productos, setProductos] = useState([]);

	const API = 'https://fakestoreapi.com/products';

	const getProductosDB = async () => {
		try {
			const respuesta = await fetch(API);
			const data = await respuesta.json();
			setProductos(data);
		} catch (error) {
			console.log(error);
			alert('No podemos enseñar los productos ahora mismo');
		}
	};

	useEffect(() => {
		getProductosDB();
	}, []);
	console.log(productos);
	return (
		<section className='container'>
			{productos.length ? (
				<>
					{productos.map((producto) => {
						return (
							<div key={producto.id} className='card-container'>
								<Item
									img={producto.image}
									title={producto.title}
									stock={producto.rating.count}
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
