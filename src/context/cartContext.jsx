import { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
	const [cartList, setCartList] = useState([]);
	const [cart, setCart] = useState(0);

	const addToCart = (item, quantity) => {
		if (cartList.length === 0) {
			let product = { ...item, quantity };
			setCartList([...cartList, product]);
			setCart(product.quantity);
		} else {
			let product = { ...item, quantity };
			setCartList([...cartList, product]);
			let qty = cartList.map((el) => el.quantity);
			let totalQty = qty.reduce((qty1, qty2) => qty1 + qty2, product.quantity);
			setCart(totalQty);
			if (cartList.some((element) => element.id === item.id)) {
				let index = cartList.findIndex((el) => el.id === item.id);
				let product = cartList[index];
				let productQty = product.quantity + quantity;
				console.log(`Cantidad total del producto: ${productQty}`);
				console.log(`Cantidad total: ${totalQty}`);
				const newCart = [...cartList];
				newCart.splice(index, 1, product);
				setCartList([...newCart]);
				let newTotalQty = newCart.reduce(
					(qty1, qty2) => qty1 + qty2,
					product.quantity
				);
				setCart(newTotalQty);
			}
		}
	};

	const deleteProductId = (id) => {
		const newCart = [...cartList];
		let index = newCart.findIndex((el) => el.id === id);
		newCart.splice(index, 1);

		setCartList([...newCart]);
	};

	const removeCart = () => {
		setCartList([]);
		setCart(0);
	};

	return (
		<CartContext.Provider
			value={{ cartList, cart, addToCart, deleteProductId, removeCart }}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
