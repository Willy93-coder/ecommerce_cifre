import ItemListContainer from './components/itemListContainer/ItemListContainer';
import NavBar from './components/navBar/NavBar';

const App = () => {
	return (
		<>
			<NavBar />
			<ItemListContainer greeting='Soy Guillermo Cifre y esta es mi tienda online llamada Mallorca Sports' />
		</>
	);
};

export default App;
