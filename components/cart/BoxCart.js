import React, { useState } from 'react';
// import './index.css';
import HeaderBox from './HeaderBox';
import Progress from './progress/Progress';
import MiniCart from './minicart/MiniCart';
import Price from './price/Price';
import CheckOut from './checkout/CheckOut';

const BoxCart = ({ currentProduct, currentImage, count, removeProduct }) => {
	
	const [item] = useState(currentProduct);
	// console.log('item',item)

	return (
		<div className="box-cart">
			<HeaderBox  count={count}/>
			<Progress item={item} count={count}/>
			<MiniCart currentImage={currentImage} item={item} count={count} removeProduct={removeProduct}/>
			<Price item={item} count={count}/>
			<CheckOut />
		</div>
	);
};

export default BoxCart;
