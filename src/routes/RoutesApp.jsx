import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from '../components/itemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../components/itemListContainer/ItemListContainer';
import NavBar from '../components/navBar/NavBar';
import CartContextProvider from '../context/cartContext';
import CartList from '../pages/cart/CartList';

const RoutesApp = () => {
	return (
		<BrowserRouter>
			<CartContextProvider>
				<NavBar />
				<Routes>
					<Route path='/' element={<ItemListContainer />} />
					<Route
						path='/categoria/:categoriaId'
						element={<ItemListContainer />}
					/>
					<Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
					<Route path='/cart' element={<CartList />} />
				</Routes>
			</CartContextProvider>
		</BrowserRouter>
	);
};

export default RoutesApp;
