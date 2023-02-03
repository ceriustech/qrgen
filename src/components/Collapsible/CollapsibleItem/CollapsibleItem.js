import React, { useState } from 'react';
import { Item, ItemHeader, ItemButton } from './styles';
import Plus from '../../../assets/images/plus-icon.svg';
import Minus from '../../../assets/images/minus-icon.svg';

const CollapsibleItem = ({ title, info }) => {
	const [expanded, setExpanded] = useState(false);

	let faqIcon;
	if (expanded) {
		faqIcon = Plus;
	} else {
		faqIcon = Minus;
	}

	return (
		<Item id="faq-item">
			<ItemHeader>
				<h4 onClick={() => setExpanded(!expanded)}>{title}</h4>
				<ItemButton onClick={() => setExpanded(!expanded)}>
					<img
						src={faqIcon}
						alt={faqIcon === Plus ? 'Plus icon' : 'Minus icon'}
					/>
				</ItemButton>
			</ItemHeader>
			{expanded && <p>{info}</p>}
		</Item>
	);
};

export default CollapsibleItem;
