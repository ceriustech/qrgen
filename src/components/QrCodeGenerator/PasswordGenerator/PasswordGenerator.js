import React, { useState, useRef } from 'react';
import Input from '../../../global/components/Input';
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
	// const [prevAccessCode, setPrevAccessCode] = useState('');
	const [qrCode, setQrCode] = useState(null);
	const [size, setSize] = useState(100);
	const qrCodeRef = useRef();

	function handleSizeChange(event) {
		event.preventDefault();
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
				<StyledForm id="accesscode-form" onSubmit={(e) => e.preventDefault()}>
					<Input
						label="Choose a size"
						fieldType="input"
						typeValue="number"
						fieldName="size"
						fieldValue={size}
						fn={handleSizeChange}
					/>
					<Input
						label="Access Code"
						fieldType="input"
						typeValue="text"
						fieldName="accesscode"
						placeHolder="Access code here"
						fieldValue={accessCode}
						fn={generateCode}
						disableBottomMargin
					/>
					<Button handleClick={generateCode}>Generate Access Code</Button>
					<br />
					<Button handleClick={generateQRCode}>Generate QR Code</Button>
				</StyledForm>
			</FormWrapper>
			<QrCodeWrapper>
				{accessCode !== '' && <div id="qrcode-password" ref={qrCodeRef} />}
			</QrCodeWrapper>
		</Container>
	);
};

export default AccessControl;
