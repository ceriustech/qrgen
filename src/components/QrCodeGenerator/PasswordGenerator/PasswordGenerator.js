import React, { useState, useRef } from 'react';
import qrcode from 'davidshimjs-qrcodejs';

const AccessControl = () => {
	const [accessCode, setAccessCode] = useState('');
	const [prevAccessCode, setPrevAccessCode] = useState('');
	const [qrCode, setQrCode] = useState(null);
	const qrCodeRef = useRef();

	const generateCode = () => {
		const code =
			Math.random().toString(36).substring(2, 15) +
			Math.random().toString(36).substring(2, 15);
		setAccessCode(code);
	};

	function removeQRCode() {
		const qrCode = document.getElementById('qrcode-password');
		while (qrCode.firstChild) {
			qrCode.removeChild(qrCode.firstChild);
		}
	}

	const generateQRCode = () => {
		if (accessCode !== prevAccessCode) {
			removeQRCode();
			const qr = new qrcode(qrCodeRef.current, {
				text: accessCode,
				width: 200,
				height: 200,
				colorDark: '#000000',
				colorLight: '#ffffff',
				correctLevel: qrcode.CorrectLevel.H,
			});
			setQrCode(qr);
			if (qrCode) {
				qr.makeCode(accessCode);
				setPrevAccessCode(accessCode);
			}
		}
	};

	return (
		<div>
			<button onClick={generateCode}>Generate Access Code</button>
			<button onClick={generateQRCode}>Generate QR Code</button>
			{accessCode !== '' && (
				<div>
					<p>Access Code: {accessCode}</p>
					<div id="qrcode-password" ref={qrCodeRef}></div>
				</div>
			)}
		</div>
	);
};

export default AccessControl;
