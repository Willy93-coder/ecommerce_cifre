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

	const getProductosDB = async () => {
		try {
			const resultado = await getProductos;
			setProductos(resultado);
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
									name={producto.name}
									description={producto.description}
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
