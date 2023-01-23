import React, { useState, useRef } from 'react';
import Button from '../../../global/components/Button';
import {
	Container,
	FormWrapper,
	FormHeader,
	StyledForm,
	StyledSelect,
	QrCodeWrapper,
	StyledInput,
	SyledButtonsWrapper,
} from '../styles';
import QRCode from 'qrcode.react';
import imageExtension from '../../../data/imgExtenstions';
import mapStyledButton from '../../../global/components/Utility/Functions/mapStyledButton';

const WifiGenerator = () => {
	const [networkName, setNetworkName] = useState('');
	const [networkType, setNetworkType] = useState('No encryption');
	const [password, setPassword] = useState('');
	const [wifiData, setWifiData] = useState('');
	const [activeButton, setActiveButton] = useState(false);
	const qrCodeRef = useRef();

	const handleChange = (e) => {
		switch (e.target.name) {
			case 'networkName':
				setNetworkName(e.target.value);
				break;
			case 'networkType':
				setNetworkType(e.target.value);
				break;
			case 'password':
				setPassword(e.target.value);
				break;
			default:
				break;
		}
	};

	const generateQRCode = (e) => {
		e.preventDefault();
		setActiveButton(true);
		if (networkType) setWifiData(`WIFI:T:WPA;S:${networkName};P:${password};`);
	};

	const downloadQRCode = (qrCodeElement, ext) => {
		const canvas = qrCodeElement.querySelector('canvas');
		const link = document.createElement('a');
		link.download = `qr-code.${ext}`;
		link.href = canvas.toDataURL(`image/${ext}`);
		link.click();
	};

	return (
		<Container>
			<FormWrapper>
				<FormHeader>
					<h1>
						<span>QR Code</span> <span>Generator</span>
					</h1>
					<p>Create a QR code for easy WIFI access.</p>
				</FormHeader>
				<StyledForm onSubmit={generateQRCode}>
					<label htmlFor="network-name">Network Name</label>
					<StyledInput
						type="text"
						name="networkName"
						id="network-name"
						placeholder="SSID"
						defaultValue={networkName}
						onChange={handleChange}
						autoComplete="off"
					/>
					<br />
					<label htmlFor="network-type">Network Type</label>
					<StyledSelect
						name="networkType"
						defaultValue={networkType}
						onChange={handleChange}
					>
						<option value="WPA/WPA2">WPA/WPA2</option>
						<option value="No encryption">No encryption</option>
					</StyledSelect>
					<br />
					<label htmlFor="password">Wifi Password</label>
					<StyledInput
						type="password"
						name="password"
						id="password"
						placeholder="Wi-Fi password"
						defaultValue={password}
						onChange={handleChange}
						autoComplete="new-password"
					/>
					<br />
					<Button typeValue="submit" setWidth={true}>
						Create QR Code
					</Button>
				</StyledForm>
			</FormWrapper>
			<QrCodeWrapper>
				{password && wifiData && (
					<>
						<div id="qrcode-wifi" ref={qrCodeRef}>
							<QRCode value={wifiData} />
						</div>
						<SyledButtonsWrapper>
							{activeButton &&
								mapStyledButton(
									imageExtension,
									activeButton,
									downloadQRCode,
									qrCodeRef.current
								)}
						</SyledButtonsWrapper>
					</>
				)}
			</QrCodeWrapper>
		</Container>
	);
};

export default WifiGenerator;
