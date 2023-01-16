import React, { useState } from 'react';
import QRCode from 'davidshimjs-qrcodejs';

const AccessControl = () => {
	const [accessCode, setAccessCode] = useState('');
	const [prevAccessCode, setPrevAccessCode] = useState('');
	const [qrCode, setQRCode] = useState(null);

	const generateCode = () => {
		const code =
			Math.random().toString(36).substring(2, 15) +
			Math.random().toString(36).substring(2, 15);
		setAccessCode(code);
	};

	function removeQRCode() {
		const qrCode = document.getElementById('qr');
		while (qrCode.firstChild) {
			qrCode.removeChild(qrCode.firstChild);
		}
	}

	const generateQRCode = () => {
		if (accessCode !== prevAccessCode) {
			removeQRCode();
			const qr = new QRCode('qr', {
				text: accessCode,
				width: 200,
				height: 200,
				colorDark: '#000000',
				colorLight: '#ffffff',
				correctLevel: QRCode.CorrectLevel.H,
			});
			setQRCode(qr);
			qr.makeCode(accessCode);
			setPrevAccessCode(accessCode);
		}
	};

	console.log('CODE:', accessCode);
	console.log('PREV CODE:', prevAccessCode);
	console.log('ACCESS CODE:', accessCode !== prevAccessCode);

	return (
		<div>
			<button onClick={generateCode}>Generate Access Code</button>
			<button onClick={generateQRCode}>Generate QR Code</button>
			{accessCode !== '' && (
				<div>
					<p>Access Code: {accessCode}</p>
					<div id="qr"></div>
				</div>
			)}
		</div>
	);
};

export default AccessControl;
