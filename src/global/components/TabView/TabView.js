import React, { useState } from 'react';
import LinkGenerator from '../../../components/QrCodeGenerator/LinkGenerator';
import WifiGenerator from '../../../components/QrCodeGenerator/WifiGenerator';
import PasswordGenerator from '../../../components/QrCodeGenerator/PasswordGenerator';
import GeoCacheGenerator from '../../../components/QrCodeGenerator/GeoCacheGenerator';
import {
	TabViewContainer,
	TabViewWrapper,
	TabButton,
	TabContent,
} from './styles';

const tabs = [
	{ label: 'URL', content: <LinkGenerator /> },
	{ label: 'WIFI', content: <WifiGenerator /> },
	{ label: 'Password', content: <PasswordGenerator /> },
	{ label: 'GeoCache', content: <GeoCacheGenerator /> },
];

const TabView = () => {
	const [activeTab, setActiveTab] = useState(0);

	const handleClick = (index) => {
		setActiveTab(index);
	};

	return (
		<TabViewContainer>
			<TabViewWrapper>
				{tabs.map((tab, index) => (
					<TabButton
						key={tab.label}
						onClick={() => handleClick(index)}
						active={activeTab}
						index={index}
					>
						{tab.label}
					</TabButton>
				))}
			</TabViewWrapper>
			<TabContent>{tabs[activeTab].content}</TabContent>
		</TabViewContainer>
	);
};

export default TabView;
