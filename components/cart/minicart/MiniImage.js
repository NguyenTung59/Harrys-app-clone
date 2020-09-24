import React from 'react';
// import '../index.css';

const MiniImage = ({ url }) => {
	return (
		<div className="mini-image">
			<img src={url} alt="#" />
		</div>
	);
};

export default MiniImage;
