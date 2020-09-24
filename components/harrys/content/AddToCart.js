import React from 'react';
// import 'antd/dist/antd.css';
// import '../index.css';
import { Button, Row } from 'antd';

const AddToCart = ({
	setClicked,
	addToCart,
	incrementCount,
	decrementCount,
	count
}) => {
	// handle Add
	const handleAddToCart = () => {
		setClicked(true);
		addToCart();
	};
	return (
		<Row className="addtocart">
			<div className="form-count">
				<Button className="btn-count" onClick={decrementCount}>
					-
				</Button>
				<div className="count"> {count} </div>
				<Button className="btn-count" onClick={incrementCount}>
					+
				</Button>
			</div>
			<button className="btn-addtocart" onClick={handleAddToCart}>
				Add to cart
			</button>
		</Row>
	);
};

export default AddToCart;
