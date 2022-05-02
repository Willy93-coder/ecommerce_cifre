import { useState } from 'react';

const ItemCount = ({ initial, stock, onAdd }) => {
	const [value, setValue] = useState(initial);

	const addItem = (num) => {
		setValue(value + num);
	};

	return (
		<>
			<div className='count-container'>
				<div className='count-container__plus'>
					<button
						className='btn btn-plus'
						onClick={() => addItem(-1)}
						disabled={value === initial ? true : null}
					>
						-
					</button>
					<span className='cantidad'>{value}</span>
					<button
						className='btn btn-plus'
						onClick={() => addItem(1)}
						disabled={value === stock ? true : null}
					>
						+
					</button>
				</div>
				<div className='count-container__add'>
					<button className='btn btn-add' onClick={() => onAdd(value)}>
						Añadir
					</button>
				</div>
			</div>
		</>
	);
};

export default ItemCount;
