import React, { useState } from 'react';
import qrcode from 'davidshimjs-qrcodejs';

const WifiGenerator = () => {
	const [networkName, setNetworkName] = useState('');
	const [networkType, setNetworkType] = useState('No encryption');
	const [password, setPassword] = useState('');
	const [qrCode, setQrCode] = useState(null);

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

	const handleSubmit = (e) => {
		e.preventDefault();
		const newQrCode = new qrcode(document.getElementById('qrcode-wifi'), {
			text: `Network Name: ${networkName}\nNetwork Type: ${networkType}\nWifi Password: ${password}`,
			width: 128,
			height: 128,
			colorDark: '#000000',
			colorLight: '#ffffff',
			correctLevel: qrcode.CorrectLevel.H,
		});
		setQrCode(newQrCode);
	};

	console.log('NETWORK NAME:', networkName);
	console.log('PASS:', password);

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>
					Network Name:
					<input
						type="text"
						name="networkName"
						placeholder="SSID"
						value={networkName}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Network Type:
					<select
						name="networkType"
						value={networkType}
						onChange={handleChange}
					>
						<option value="WEP">WEP</option>
						<option value="WPA/WPA2">WPA/WPA2</option>
						<option value="No encryption" selected>
							No encryption
						</option>
					</select>
				</label>
				<br />
				<label>
					Wifi Password:
					<input
						type="password"
						name="password"
						placeholder="Wi-Fi password"
						value={password}
						onChange={handleChange}
					/>
				</label>
				<br />
				<button type="submit">Generate QR Code</button>
			</form>
			{qrCode && <div id="qrcode-wifi"></div>}
		</div>
	);
};

export default WifiGenerator;
