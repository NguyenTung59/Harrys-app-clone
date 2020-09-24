import React from 'react';
// import '../index.css';

const ButtonRemove = ({ removeProduct }) => {
	return (
		<div className="buttonRemove">
			<button className="btnRemove" onClick={removeProduct} />
		</div>
	);
};

export default ButtonRemove;
