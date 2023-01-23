import React, { useState, useRef } from 'react';
import Button from '../../../global/components/Button';
import qrcode from 'davidshimjs-qrcodejs';
import {
	Container,
	FormWrapper,
	FormHeader,
	StyledForm,
	QrCodeWrapper,
	StyledInput,
	SyledButtonsWrapper,
} from '../styles';
import imageExtension from '../../../data/imgExtenstions';
import mapStyledButton from '../../../global/components/Utility/Functions/mapStyledButton';

const AccessControl = () => {
	const [accessCode, setAccessCode] = useState('');
	const [prevAccessCode, setPrevAccessCode] = useState('');
	const [qrCode, setQrCode] = useState(null);
	const [size, setSize] = useState(100);
	const qrCodeRef = useRef();

	function handleSizeChange(event) {
		setSize(event.target.value);
	}

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
		if (accessCode) {
			removeQRCode();
			const qr = new qrcode(qrCodeRef.current, {
				text: accessCode,
				width: size,
				height: size,
			});
			setQrCode(qr);
			if (qrCode) {
				qr.makeCode(accessCode);
				setPrevAccessCode(accessCode);
			}
		}
		console.log('SIZE', size);
	};

	return (
		<Container>
			<FormWrapper>
				<FormHeader>
					<h1>
						<span>QR Code</span> <span>Generator</span>
					</h1>
					<p>
						Create a password that can be accessed with the scan of a QR Code.
					</p>
				</FormHeader>
				<StyledForm>
					<label htmlFor="size">Choose a size</label>
					<StyledInput
						type="number"
						name="size"
						value={size}
						onChange={handleSizeChange}
					/>
					<label htmlFor="accesscode">Access Code</label>
					<StyledInput
						type="text"
						name="accesscode"
						placeholder="Access code here"
						value={accessCode}
						onChange={generateCode}
					/>
				</StyledForm>
				<Button handleClick={generateCode}>Generate Access Code</Button>
				<Button handleClick={generateQRCode}>Generate QR Code</Button>
			</FormWrapper>
			<QrCodeWrapper>
				{accessCode !== '' && <div id="qrcode-password" ref={qrCodeRef} />}
			</QrCodeWrapper>
		</Container>
	);
};

export default AccessControl;
