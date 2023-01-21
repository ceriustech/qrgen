import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const WifiGenerator = () => {
	const [networkName, setNetworkName] = useState('');
	const [networkType, setNetworkType] = useState('No encryption');
	const [password, setPassword] = useState('');
	const [wifiData, setWifiData] = useState('');

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
		if (networkType) setWifiData(`WIFI:T:WPA;S:${networkName};P:${password};`);
	};

	return (
		<div>
			<form onSubmit={generateQRCode}>
				<label>
					Network Name:
					<input
						type="text"
						name="networkName"
						id="network-name"
						placeholder="SSID"
						value={networkName}
						onChange={handleChange}
						autoComplete="off"
					/>
				</label>
				<br />
				<label>
					Network Type:
					<select
						name="networkType"
						defaultValue={networkType}
						value={networkType}
						onChange={handleChange}
					>
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
						id="password"
						placeholder="Wi-Fi password"
						value={password}
						onChange={handleChange}
						autoComplete="new-password"
					/>
				</label>
				<br />
				<button type="submit">Generate QR Code</button>
			</form>
			{wifiData && <QRCode value={wifiData} />}
		</div>
	);
};

export default WifiGenerator;
