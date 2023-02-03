import React, { useState, useRef } from 'react';
import Input from '../../../global/components/Input';
import Button from '../../../global/components/Button';
import QrCodeIcon from '../../../assets/components/QrCodeIcon';
import qrcode from 'davidshimjs-qrcodejs';
import {
	Container,
	FormWrapper,
	FormHeader,
	StyledForm,
	QrCodeWrapper,
	InputWrapper,
	StyledButtonsWrapper,
} from '../styles';
import imageExtension from '../../../data/imgExtenstions';
import mapStyledButton from '../../../global/components/Utility/Functions/mapStyledButton';
import downloadQRCode from '../../../global/components/Utility/Functions/downloadQRCode';

const AccessControl = () => {
	const [accessCode, setAccessCode] = useState('');
	const [qrCode, setQrCode] = useState(null);
	const [size, setSize] = useState(128);
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
	};

	const downloadButtonIcon = 'download';
	const type = 'download';

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
					<InputWrapper>
						<Input
							label="Access Code"
							fieldType="input"
							typeValue="text"
							fieldName="accesscode"
							placeHolder="Access code"
							fieldValue={accessCode}
							fn={generateCode}
						/>
						<Button handleClick={generateCode} isWidth icon={'accesscode'}>
							Generate Access Code
						</Button>
					</InputWrapper>
					<Input
						label="Choose a size"
						fieldType="input"
						typeValue="number"
						fieldName="size"
						fieldValue={size}
						fn={handleSizeChange}
					/>
					<Button handleClick={generateQRCode} isWidth icon={'qrcode'}>
						Create QR Code
					</Button>
				</StyledForm>
			</FormWrapper>
			<QrCodeWrapper>
				<div id="qrcode-password" ref={qrCodeRef} />
				<StyledButtonsWrapper>
					{(qrCode &&
						mapStyledButton(
							imageExtension,
							true,
							downloadQRCode,
							qrCodeRef.current,
							downloadButtonIcon,
							type
						)) || <QrCodeIcon />}
				</StyledButtonsWrapper>
			</QrCodeWrapper>
		</Container>
	);
};

export default AccessControl;
