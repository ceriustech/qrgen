import React, { useState } from 'react';
import QRGenerator from '../../../../components/QrCodeGenerator';
import { TabContainer, TabButton, TabContent } from './styles';

const tabs = [
	{ label: 'URL', content: <QRGenerator /> },
	{ label: 'WIFI', content: 'Content for Tab 2' },
	{ label: 'Tab 3', content: 'Content for Tab 3' },
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
