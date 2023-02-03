import React, { useState } from 'react';
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
		<article className="question">
			<header>
				<h4 onClick={() => setExpanded(!expanded)} className="question-title">
					{title}
				</h4>
				<button className="btn" onClick={() => setExpanded(!expanded)}>
					<img
						src={faqIcon}
						alt={faqIcon === Plus ? 'Plus icon' : 'Minus icon'}
					/>
				</button>
			</header>
			{expanded && <p>{info}</p>}
		</article>
	);
};

export default CollapsibleItem;
