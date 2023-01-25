import React, { useState, useRef } from 'react';
import Input from '../../../global/components/Input';
import Button from '../../../global/components/Button';
import {
	Container,
	FormWrapper,
	FormHeader,
	StyledForm,
	QrCodeWrapper,
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
	const [size, setSize] = useState(100);
	const [qrCode, setQrCode] = useState(null);
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

	function handleSizeChange(event) {
		setSize(event.target.value);
	}

	const generateQRCode = (e) => {
		e.preventDefault();
		setActiveButton(true);
		setQrCode(true);
		if (networkType) setWifiData(`WIFI:T:WPA;S:${networkName};P:${password};`);
		setSize(size);
	};

	const downloadQRCode = (qrCodeElement, ext) => {
		const canvas = document.querySelector('canvas');
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
				<StyledForm id="wifi-form" onSubmit={generateQRCode}>
					<Input
						label="Network Name"
						fieldType="input"
						typeValue="text"
						fieldName="networkName"
						placeHolder="SSID"
						fieldValue={networkName}
						fn={handleChange}
						autoCompleteValue="off"
					/>
					<Input
						label="Network Type"
						fieldType="select"
						fieldName="networkType"
						fieldValue={networkType}
						fn={handleChange}
					>
						<option value="WPA/WPA2">WPA/WPA2</option>
						<option value="No encryption">No encryption</option>
					</Input>
					<Input
						label="Choose a size"
						fieldType="input"
						typeValue="number"
						fieldName="size"
						fieldValue={size}
						fn={handleSizeChange}
					/>
					<Input
						label="Wifi Password"
						fieldType="input"
						typeValue="password"
						fieldName="password"
						placeHolder="Wi-Fi password"
						fieldValue={password}
						fn={handleChange}
						autoCompleteValue="new-password"
						disableBottomMargin
					/>
					<br />
					<Button typeValue="submit" isWidth>
						Create QR Code
					</Button>
				</StyledForm>
			</FormWrapper>
			<QrCodeWrapper>
				{qrCode && (
					<div id="qrcode-wifi" ref={qrCodeRef}>
						{password && wifiData && activeButton && (
							<QRCode value={wifiData} size={size} />
						)}
					</div>
				)}
				<SyledButtonsWrapper>
					{password &&
						wifiData &&
						activeButton &&
						mapStyledButton(
							imageExtension,
							activeButton,
							downloadQRCode,
							qrCodeRef.current
						)}
				</SyledButtonsWrapper>
			</QrCodeWrapper>
		</Container>
	);
};

export default WifiGenerator;
