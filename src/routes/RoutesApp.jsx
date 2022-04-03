import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from '../components/itemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../components/itemListContainer/ItemListContainer';
import NavBar from '../components/navBar/NavBar';
import CartList from '../pages/cart/CartList';

const RoutesApp = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path='/' element={<ItemListContainer />} />
				<Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
				<Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
				<Route path='/cart' element={<CartList />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RoutesApp;
