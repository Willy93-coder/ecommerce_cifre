import { useState, useEffect } from 'react';
import { listaProductos } from '../../data/data';
import Item from '../item/Item';

const ItemList = () => {
	const [productos, setProductos] = useState([]);

	const getProductos = new Promise((res, rej) => {
		setTimeout(() => {
			res(listaProductos);
		}, 2000);
	});

	const API = 'https://fakestoreapi.com/products';

	const getProductosDB = async () => {
		try {
			const respuesta = await fetch(API);
			const data = await respuesta.json();
			setProductos(data);
			console.log(data);
		} catch (error) {
			console.log(error);
			alert('No podemos enseñar los productos ahora mismo');
		}
	};

	useEffect(() => {
		getProductosDB();
	}, []);

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
