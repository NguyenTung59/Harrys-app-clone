import React from 'react';
import HeaderContent from './HeaderContent';
import PanelContent from './PanelContent';
import AddToCart from './AddToCart';
import FooterContent from './FooterContent';

const HarrysContent = ({
	currentProduct,
	setClicked,
	addToCart,
	incrementCount,
	decrementCount,
	count
}) => {
	return (
		<div>
		<HeaderContent currentProduct={currentProduct} />
			<PanelContent currentProduct={currentProduct}/>
			<AddToCart
				setClicked={setClicked}
				addToCart={addToCart}
				decrementCount={decrementCount}
				incrementCount={incrementCount}
				count={count}
			/>
			<FooterContent />
		</div>
	);
};

export default HarrysContent;
