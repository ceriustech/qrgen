import React, { useState } from 'react';
import LinkGenerator from '../../../../components/QrCodeGenerator/LinkGenerator';
import PasswordGenerator from '../../../../components/QrCodeGenerator/PasswordGenerator';
import { TabContainer, TabButton, TabContent } from './styles';

const tabs = [
	{ label: 'URL', content: <LinkGenerator /> },
	{ label: 'WIFI', content: 'Content for tab 2' },
	{ label: 'Tab 3', content: <PasswordGenerator /> },
];

const Tabs = () => {
	const [activeTab, setActiveTab] = useState(0);

	const handleClick = (index) => {
		setActiveTab(index);
	};

	return (
		<div>
			<TabContainer>
				{tabs.map((tab, index) => (
					<TabButton key={tab.label} onClick={() => handleClick(index)}>
						{tab.label}
					</TabButton>
				))}
			</TabContainer>
			<TabContent>{tabs[activeTab].content}</TabContent>
		</div>
	);
};

export default Tabs;
