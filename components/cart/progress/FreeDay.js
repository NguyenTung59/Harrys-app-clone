import React from 'react';
// import '../index.css';

const FreeDay = ({ props }) => {
	return (
		<div>
			{/* free 2-4 day */}
			{props.item.price * props.count >= 50 ? (
				<div className="economy unlock">
					<div className="circle unlock-circle"></div>
					<div>
						<p>1-2 Day</p>
					</div>
				</div>
			) : (
				<div className="economy lock">
					<div className="circle lock-circle"></div>
					<div>
						<p>1-2 Day</p>
					</div>
				</div>
			 )} 
		</div>
	);
};

export default FreeDay;
