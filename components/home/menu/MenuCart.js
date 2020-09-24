import React from 'react';
// import '../home.css';
import BoxCart from '../../cart/BoxCart';

const MenuCart = ({
	handleClickBox,
	clicked,
	currentProduct,
	count,
	removeProduct
	,currentImage
}) => {
	return (
		<div className="cart">
			<div  style={cartStyles} onClick={handleClickBox}>
				Cart
				{count > 0 ? (
					<div className="cart-icon">
						<span className="cart-count">{count}</span>
					</div>
				) : null}
			</div>
			{clicked ? (
				<BoxCart
					currentImage={currentImage}
					currentProduct={currentProduct}
					count={count}
					removeProduct={removeProduct}
				/>
			) : null}
		</div>
	);
};

const cartStyles = {
	fontWeight: '700',
	height: '100%',
	fontSize: '14px',
	letterSpacing: '1.2px',
	color: '#666666',
	textTransform: 'uppercase'
};

export default MenuCart;
