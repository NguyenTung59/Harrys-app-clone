import React from 'react';
// import '../index.css';

const Economy = ({ props }) => {
	return (
		<div>
			{/* progress  */}

			{props.item.price * props.count >= 15 ? (
				<div className="economy unlock">
					<div className="circle unlock-circle"></div>
					<div>
						<p>Economy</p>
					</div>
				</div>
			) : (
				<div className="economy lock">
					<div className="circle lock-circle"></div>
					<div>
						<p>Economy</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default Economy;
