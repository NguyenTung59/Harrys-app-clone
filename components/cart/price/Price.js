import React from 'react';
// import '../index.css';

const Price = ({ item, count }) => {
	return (
		<div className="price">
			<h4 className="subprice">Subtotal</h4>
			<h4 className="subprice">${count * item.price}</h4>
		</div>
	);
};

export default Price;
