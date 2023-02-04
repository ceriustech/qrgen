import React from 'react';
import CollapsibleItem from '../CollapsibleItem/CollapsibleItem';
import { CollapsibleContainer } from './styles';
import { faqData } from '../../../data/faq.data';

const Collapsible = () => {
	return (
		<CollapsibleContainer id="collapsible">
			<h1>Frequently Asked Questions</h1>
			<h3>Here are a few answers to some general questions about QrGen.app.</h3>
			<div className="info">
				{faqData.map((data) => (
					<CollapsibleItem key={data.id} {...data} />
				))}
			</div>
		</CollapsibleContainer>
	);
};

export default Collapsible;
