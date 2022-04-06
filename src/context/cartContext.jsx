import { createContext, useState, useContext } from 'react';

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
	const [cartList, setCartList] = useState([]);

	const addToCart = (item) => {
		const inCart = cartList.find((productInCart) => {
			productInCart.id === item.id;
		});
		if (inCart) {
			setCartList(
				cartList.map((productIncart) => {
					if (productIncart.id === item.id) {
						return { ...inCart, cantidad: inCart.cantidad + item.cantidad };
					}
				})
			);
		} else {
			setCartList([...cartList, item]);
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
