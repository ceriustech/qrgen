import React, { useState } from 'react';
import LinkGenerator from '../../../components/QrCodeGenerator/LinkGenerator';
import WifiGenerator from '../../../components/QrCodeGenerator/WifiGenerator';
import PasswordGenerator from '../../../components/QrCodeGenerator/PasswordGenerator';
import { TabContainer, TabButton, TabContent } from './styles';

const tabs = [
	{ label: 'URL', content: <LinkGenerator /> },
	{ label: 'WIFI', content: <WifiGenerator /> },
	{ label: 'Password', content: <PasswordGenerator /> },
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
