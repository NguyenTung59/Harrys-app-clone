import React from 'react';
const ProgressBar = ({ props }) => {
	const progress = () => {
		// total price < $15
		if (props.item.price * props.count < 15) {
			return (
				<div
					style={{
						width: `${25 * ((props.item.price * props.count) / 15)}%`,
						background: 'rgb(0, 130, 91)'
					}}
				></div>
			);
		}
		// 50$ > total price >= $15
		else if (
			props.item.price * props.count >= 15 &&
			props.item.price * props.count < 50
		) {
			return (
				<div
					style={{
						width: `${25 * ((props.item.price * props.count) / 15)}%`,
						background: 'rgb(0, 130, 91)'
					}}
				></div>
			);
		}
		// total price > $50
		else {
			return (
				<div
					style={{
						width: `${100}%`,
						background: 'rgb(0, 130, 91)'
					}}
				></div>
			);
		}
	};

	return (
		<>
			<div className="progressbar">{progress()}</div>
		</>
	);
};

export default ProgressBar;
