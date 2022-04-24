import { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
	const [cartData, setCartData] = useState({});
	const [cartQty, setCartQty] = useState(0);
	const [price, setPrice] = useState(0);

	const addToCart = (item, quantity) => {
		const newItem = {
			...item,
			quantity: quantity + cartData[item.id]?.quantity || quantity,
			total: quantity * cartData[item.id]?.price || quantity * item.price,
		};

		setCartData({
			...cartData,
			[item.id]: {
				...newItem,
			},
		});

		setCartQty(cartQty + quantity);
		setPrice(price + newItem.total);
	};

	const deleteProductById = (id) => {
		const cartDataKeys = Object.keys(cartData);
		const idString = id.toString();

		for (let i = 0; i < cartDataKeys.length; i++) {
			if (cartDataKeys[i] === idString) {
				const priceProduct = cartData[cartDataKeys[i]].price;
				const totalQtyProduct = cartData[cartDataKeys[i]].quantity;
				const totalPriceProduct = priceProduct * totalQtyProduct;
				const newTotalCartPrice = price - totalPriceProduct;
				Number(newTotalCartPrice.toFixed(2));

				setCartQty(cartQty - totalQtyProduct);
				setPrice(newTotalCartPrice);
				delete cartData[cartDataKeys[i]];
				setCartData(cartData);
				console.log('Este producto se ha eliminado');
			}
		}
	};

	const removeCart = () => {
		setCartData({});
		setCartQty(0);
	};

	return (
		<CartContext.Provider
			value={{
				cartData,
				cartQty,
				price,
				addToCart,
				deleteProductById,
				removeCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
