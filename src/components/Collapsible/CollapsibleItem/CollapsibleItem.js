import React, { useState } from 'react';
import { Item, ItemHeader, ItemButton } from './styles';
import Plus from '../../../assets/images/plus-icon.svg';
import Minus from '../../../assets/images/minus-icon.svg';

const CollapsibleItem = ({ title, info }) => {
	const [expanded, setExpanded] = useState(false);

	function handleCollapsible() {
		setExpanded(!expanded);
	}

	let faqIcon;
	if (expanded) {
		faqIcon = Plus;
	} else {
		faqIcon = Minus;
	}

	return (
		<Item id="faq-item" isExpanded={expanded}>
			<ItemHeader isExpanded={expanded}>
				<h4 onClick={handleCollapsible}>{title}</h4>
				<ItemButton onClick={handleCollapsible}>
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
