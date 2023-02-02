import React from 'react';
import { Link } from 'react-router-dom';

const NavigationItem = ({ data }) => {
	console.log('DATA PROP:', data);

	return (
		<Link to={data.path} className="nav-item">
			{data.name}
		</Link>
	);
};

export default NavigationItem;
