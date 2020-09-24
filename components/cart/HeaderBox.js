import React from 'react';

const HeaderBox = ({count}) => { 
	// count productr selected
	return (
		<div>
			<h1>
				Your Cart <span>({count > 0 ? count : 0})</span>
			</h1>
		</div>
	);
};

export default HeaderBox;
