import ItemListContainer from './components/itemListContainer/ItemListContainer';
import NavBar from './components/navBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';

const App = () => {
	return (
		<>
			<NavBar />
			<ItemListContainer greeting=' Deportivas' />
			{/* <ItemDetailContainer /> */}
		</>
	);
};

export default App;
