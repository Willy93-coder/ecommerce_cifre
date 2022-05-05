import { useState } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import OrderPopUp from '../../components/orderPopUp/OrderPopUp';
import { useCartContext } from '../../context/cartContext';

const Form = ({ active }) => {
	if (!active) return null;

	const { cartData, price } = useCartContext();
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [openModal, setOpenModal] = useState(false);
	const [orderId, setOrderId] = useState('');
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		email: '',
	});

	const cartDataList = Object.keys(cartData).map((k) => cartData[k]);

	const generateOrder = async (event) => {
		try {
			event.preventDefault();
			let order = {};

			order.total = price;
			order.buyer = formData;

			order.items = cartDataList.map((item) => {
				const id = item.id;
				const name = item.title;
				const price = item.price * item.quantity;

				return { id, name, price };
			});

			// Create document in firebase
			const db = getFirestore();
			const queryCollection = collection(db, 'orders');
			const queryOrder = await addDoc(queryCollection, order);
			console.log(queryOrder);
			const queryOrderId = queryOrder.id;
			console.log(queryOrderId);
			setOpenModal(true);
			setOrderId(queryOrderId);
		} catch (error) {
			console.log(error);
			alert('No se ha podido realizar el pedido');
		}
	};

	const emailValidation = (mail) => {
		const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
		if (regEx.test(mail)) {
			setMessage('');
		} else if (regEx.test(mail) && mail == '') {
			setMessage('No valid email');
		} else {
			setMessage('No valid email');
		}
	};

	const handleChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
		emailValidation(formData.email);
	};

	return (
		<div className='container-form'>
			<h3 className='margin-b container-form__title'>Orden de compra</h3>
			<form onSubmit={generateOrder} className='container-form__order'>
				<input
					type='text'
					name='name'
					placeholder='Ingrese su nombre y apellidos'
					onChange={handleChange}
					value={formData.name}
					className='margin-b input'
				/>
				<input
					type='text'
					name='phone'
					placeholder='Ingrese su número de telefono'
					onChange={handleChange}
					value={formData.phone}
					className='margin-b input'
				/>
				<input
					type='email'
					name='email'
					placeholder='Ingrese su email'
					onChange={handleChange}
					value={formData.email}
					className='margin-b input'
				/>
				<p className='incorrect'>{message}</p>
				<div className='order-btn'>
					<button className='btn'>Generar orden</button>
				</div>
			</form>
			<OrderPopUp
				open={openModal}
				onClose={() => setOpenModal(false)}
				orderId={orderId}
			/>
		</div>
	);
};

export default Form;
