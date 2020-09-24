import React from 'react';
import FreeShip from './FreeShip';
import ProgressBar from './ProgressBar';
import Economy from './Economy';
import FreeDay from './FreeDay';

const Progress = props => {
	return (
		<div className="progress">
			<FreeShip props={props} />
			<ProgressBar props={props} />
			<div className="progress-circle">
				<Economy props={props} />
				<FreeDay props={props} />
			</div>
		</div>
	);
};

export default Progress;
