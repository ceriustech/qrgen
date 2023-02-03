import React from 'react';
import NavigationItem from '../NavigationItem';
import { NavContainer } from './styles';
import { routes } from '../../../routes/Routes';

const NavigationContainer = () => (
	<NavContainer className="nav-container">
		{routes.map((item) => (
			<NavigationItem data={item} key={item.id} />
		))}
	</NavContainer>
);

export default NavigationContainer;
