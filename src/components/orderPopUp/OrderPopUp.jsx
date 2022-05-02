import { FaTimes } from 'react-icons/fa';

const OrderPopUp = ({ open, onClose, orderId }) => {
	if (!open) return null;
	return (
		<>
			<div className='modal'>
				<div onClick={onClose} className='modal__overlay'></div>
				<div className='modal__content'>
					<h2>Orden de compra</h2>
					<p>Su orden de compra es {orderId}</p>
					<button className='close-modal' onClick={onClose}>
						<FaTimes />
					</button>
				</div>
			</div>
		</>
	);
};

export default OrderPopUp;
