import React from 'react';
import MiniImage from './MiniImage';
import MiniInfo from './MiniInfo';
import ButtonRemove from './ButtonRemove';

const MiniCart = ({ item, count, removeProduct, currentImage }) => {
	return (
		<>
			{count ? (
				<div className="mini-cart">
					<MiniImage url={currentImage.url} />
					<MiniInfo item={item} count={count} />
					<ButtonRemove removeProduct={removeProduct} />
				</div>
			) : (
				<div className="mini-cart">You have no items in your cart.</div>
			)}
		</>
	);
};

export default MiniCart;
