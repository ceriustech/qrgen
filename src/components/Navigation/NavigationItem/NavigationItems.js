import React from 'react';
import { NavLink } from './styles';

const NavigationItem = ({ data }) => {
	console.log('DATA PROP:', data);

	return (
		<NavLink to={data.path} className="nav-item">
			{data.name}
		</NavLink>
	);
};

export default NavigationItem;
