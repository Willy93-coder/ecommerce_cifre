import { createContext, useState, useContext } from 'react';

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
	const [cartList, setCartList] = useState([]);

	const addToCart = (item, quantity) => {
		if (cartList.some((element) => element.id === item.id)) {
			let index = cartList.findIndex((el) => el.id === item.id);
			let product = cartList[index];
			product.quantity = product.quantity + quantity;

			const newCart = [...cartList];
			newCart.splice(index, 1, product);

			setCartList([...newCart]);
		} else {
			let product = { ...item, quantity };
			setCartList([...cartList, product]);
		}
	};

	const removeCart = () => {
		setCartList([]);
	};

	return (
		<CartContext.Provider value={{ cartList, addToCart, removeCart }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
