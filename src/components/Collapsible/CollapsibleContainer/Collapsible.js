import React from 'react';
import CollapsibleItem from '../CollapsibleItem/CollapsibleItem';
import { faqData } from '../../../data/faq.data';

const Collapsible = () => {
	return (
		<main>
			<div className="container">
				<h3>
					Here are a few answers to some general questions about QrGen.app
				</h3>
				<section className="info">
					{faqData.map((data) => (
						<CollapsibleItem key={data.id} {...data} />
					))}
				</section>
			</div>
		</main>
	);
};

export default Collapsible;
