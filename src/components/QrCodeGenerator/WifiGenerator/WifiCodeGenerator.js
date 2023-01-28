import React, { useState, useRef } from 'react';
import Input from '../../../global/components/Input';
import Button from '../../../global/components/Button';
import {
	Container,
	FormWrapper,
	FormHeader,
	StyledForm,
	QrCodeWrapper,
	StyledButtonsWrapper,
} from '../styles';
import { QRCodeCanvas } from 'qrcode.react';
import imageExtension from '../../../data/imgExtenstions';
import mapStyledButton from '../../../global/components/Utility/Functions/mapStyledButton';
import downloadQRCode from '../../../global/components/Utility/Functions/downloadQRCode';

const WifiGenerator = () => {
	const [networkName, setNetworkName] = useState('');
	const [networkType, setNetworkType] = useState('No encryption');
	const [password, setPassword] = useState('');
	const [qrCodeSize, setQrCodeSize] = useState(128);
	const [qrCode, setQrCode] = useState();
	const qrCodeRef = useRef();

	console.log('qrCodeSize', qrCodeSize);

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
		setQrCodeSize(event.target.value);
	}

	const generateQRCode = (e) => {
		e.preventDefault();
		if (networkName !== '' && password !== '') {
			if (networkType) {
				const wifiData = `WIFI:T:WPA;S:${networkName};P:${password};`;
				setQrCode(
					<QRCodeCanvas
						value={wifiData}
						size={qrCodeSize}
						style={{ height: `${qrCodeSize}px`, width: `${qrCodeSize}px` }}
					/>
				);
			}
		}
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
						fieldValue={qrCodeSize}
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
				<div id="qrcode-wifi" ref={qrCodeRef}>
					{qrCode}
				</div>
				<StyledButtonsWrapper>
					{password &&
						qrCode &&
						mapStyledButton(
							imageExtension,
							true,
							downloadQRCode,
							qrCodeRef.current
						)}
				</StyledButtonsWrapper>
			</QrCodeWrapper>
		</Container>
	);
};

export default WifiGenerator;
