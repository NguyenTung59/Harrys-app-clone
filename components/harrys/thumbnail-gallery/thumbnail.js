import React, { useState } from 'react';

const Thumbnail = ({ imgUrl, handleChangeImage, index }) => {
	const [hover, setHover] = useState(false);

	
	// handle click hover
	const handleClick = () => {
		setHover(true);
	};

	// handle mouseOver hover
	const handleOver = () => {
		setHover(!hover);
	};

	// handle mouseOut hover
	const handleOut = () => {
		setHover(false);
	};

	// style CSS
	const styles = {
		height: '44px',
		width: '44px',
		border: '1px solid #bfbfbf',
		marginBottom: '10px'
	};
	const imageStyles = { width: '100%', height: '100%' };
	const isHoveredStyles = { border: '1px solid #263645', ...imageStyles };
	const noHoverStyles = { border: '0', ...imageStyles };
	return (
		<div style={styles}>
			<img
				src={imgUrl}
				style={hover ? isHoveredStyles : noHoverStyles}
				alt="#"
				onClick={(handleChangeImage, handleClick)}
				onMouseEnter={handleChangeImage}
				onMouseOver={handleOver}
				onMouseOut={handleOut}
				data-index={index}
			/>
		</div>
	);
};

export default Thumbnail;
