import React from 'react';
import NavigationItem from '../NavigationItem';
import { routes } from '../../../routes/Routes';

const NavigationContainer = () => (
	<nav className="nav-container">
		{routes.map((item) => (
			<NavigationItem data={item} />
		))}
	</nav>
);

export default NavigationContainer;
