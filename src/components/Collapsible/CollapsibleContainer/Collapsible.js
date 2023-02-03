import React from 'react';
import CollapsibleItem from '../CollapsibleItem/CollapsibleItem';
import { CollapsibleContainer } from './styles';
import { faqData } from '../../../data/faq.data';

const Collapsible = () => {
	return (
		<CollapsibleContainer className="container">
			<h3>Here are a few answers to some general questions about QrGen.app</h3>
			<div className="info">
				{faqData.map((data) => (
					<CollapsibleItem key={data.id} {...data} />
				))}
			</div>
		</CollapsibleContainer>
	);
};

export default Collapsible;
