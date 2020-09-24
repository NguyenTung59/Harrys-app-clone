import React, {useState} from 'react';
import { Row, Col } from 'antd';
// import 'antd/dist/antd.css';
import ActiveThumbnailWindow from './thumbnail-gallery/active-thumbnail-window';
import ThumbnailGrid from './thumbnail-gallery/thumbnail-grid';
import HarrysContent from './content/HarrysContent';

const HarrysGallery = ({
	addToCart,
	setClicked,
	currentImage,
	currentProduct,
	handleChangeImage,
	incrementCount,
	decrementCount,
	count
}) => {
	// const [hovered, setHovered] = useState(false);

	const renderThumbnail = () => { 
		if (currentProduct.imgUrl.length) {
			return <ActiveThumbnailWindow activeThumbnail={currentImage} />;
			
		}
	};

	return (
		<Row style={HarrysContentStyles}>
			{/* left content */}
			<Col span={16} style={LeftStyles}>
				<ThumbnailGrid
					currentImage={currentImage}
					currentProduct={currentProduct}
					handleChangeImage={handleChangeImage}
					// hovered={hovered}
				/>
				{renderThumbnail()}
			</Col>
			{/* right content */}
			<Col span={8}>
				<HarrysContent
					currentProduct={currentProduct}
					setClicked={setClicked}
					addToCart={addToCart}
					decrementCount={decrementCount}
					incrementCount={incrementCount}
					count={count}
				/>
			</Col>
		</Row>
	);
};
const HarrysContentStyles = {
	margin: '50px auto',
	maxWidth: '1024px'
};

const LeftStyles = {
	display: 'flex',
	height: '640px'
};

export default HarrysGallery;
