import React from 'react';
// import '../index.css';

const FreeShip = ({ props }) => {
	// const [time, setTime] = useState(0);
	// setTimeout(() => {
	// 	setTime(prevTime => prevTime)
	// }, 1000);

	const unlockShip = () => {
		// total price < $15
		if (props.item.price * props.count < 15) {
			return (
				<div className="shipping">
					<p className="price-ship">
						<span>${15 - props.item.price * props.count}</span> from Free
						economy shipping
					</p>
				</div>
			);
		}
		// total price > $15 && total price < 50
		else if (
			props.item.price * props.count >= 15 &&
			props.item.price * props.count < 50
		) {
			return (
				<div className="shipping unlock-day">
					<p className="price-ship">
						<span>${50 - props.item.price * props.count}</span> from Free 1-2
						Day
					</p>
					<p className="unlock">
						<span></span> Free economy shipping unlocked!
					</p>
				</div>
			);
		}
		// total price > $50
		else {
			return (
				<div className="shipping">
					<p className="unlock">
						<span></span> 1-2 Day shipping unlocked!
					</p>
				</div>
			);
		}
	};

	return (
		<div>
			{/* unlock free ship */}
			{unlockShip()}
		</div>
	);
};

export default FreeShip;
