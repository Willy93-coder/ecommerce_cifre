import ItemList from '../itemList/ItemList';

const ItemListContainer = ({ greeting }) => {
	return (
		<>
			<h2>{greeting}</h2>
			<ItemList />
		</>
	);
};

export default ItemListContainer;
