import { useState } from 'react';

const ItemCount = ({ inicial, stock, onAdd }) => {
	const [valor, setValor] = useState(inicial);

	const aniadirItem = (num) => {
		setValor(valor + num);
	};

	return (
		<>
			<div className='count-container'>
				<div className='count-container__plus'>
					<button
						className='btn btn-plus'
						onClick={() => aniadirItem(-1)}
						disabled={valor === inicial ? true : null}
					>
						-
					</button>
					<span className='cantidad'>{valor}</span>
					<button
						className='btn btn-plus'
						onClick={() => aniadirItem(1)}
						disabled={valor === stock ? true : null}
					>
						+
					</button>
				</div>
				<div className='count-container__add'>
					<button className='btn btn-add' onClick={() => onAdd(valor)}>
						Añadir
					</button>
				</div>
			</div>
		</>
	);
};

export default ItemCount;
