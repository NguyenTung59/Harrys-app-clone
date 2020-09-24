import React from 'react';

const ActiveThumbnailWindow = ({activeThumbnail}) => {
	return (
		<div style={styles}>
			<img src={activeThumbnail.url} style={ImageStyle} alt="#" />
		</div>
	);
};

const ImageStyle = {
	width: '100%',
	height: '100%'
};

const styles = {
	width: '75%',
	background: '#efefef'
};

export default ActiveThumbnailWindow;
