import React, { useState, useRef } from 'react';
import qrcode from 'davidshimjs-qrcodejs';
import {
	Container,
	FormWrapper,
	StyledForm,
	QrCodeWrapper,
	StyledInput,
	StyledButton,
} from './styles';

function QRGenerator() {
	const [url, setUrl] = useState('');
	const [size, setSize] = useState(100);
	const [activeButton, setActiveButton] = useState(false);
	const qrCodeRef = useRef();

	function handleUrlChange(event) {
		setUrl(event.target.value);
	}

	function handleSizeChange(event) {
		setSize(event.target.value);
	}

	function removeQRCode() {
		const qrCode = document.getElementById('qr');
		while (qrCode.firstChild) {
			qrCode.removeChild(qrCode.firstChild);
		}
	}

	function handleSubmit(event) {
		event.preventDefault();
		setActiveButton(true);
		removeQRCode();
		const qr = new qrcode(qrCodeRef.current, {
			width: size,
			height: size,
			text: url,
		});
	}

	function downloadQRCode(qrCodeElement) {
		const canvas = qrCodeElement.querySelector('canvas');
		const link = document.createElement('a');
		link.download = 'qr-code.png';
		link.href = canvas.toDataURL('image/png');
		link.click();
	}

	return (
		<>
			<Container>
				<FormWrapper>
					<h1>QR Code Generator</h1>
					<p>
						Smartphone users can quickly access your website with the scan of a
						QR Code.
					</p>

					<StyledForm id="generate-form" onSubmit={handleSubmit}>
						<label for="url">Enter URL</label>
						<StyledInput
							type="url"
							placeholder="Enter URL"
							name="url"
							required
							value={url}
							onChange={handleUrlChange}
						/>

						<label for="size">Choose a size</label>
						<StyledInput
							type="number"
							name="size"
							value={size}
							onChange={handleSizeChange}
						/>

						<StyledButton type="submit">Create QR Code</StyledButton>
					</StyledForm>
				</FormWrapper>
				{qrCodeRef && (
					<QrCodeWrapper>
						<div id="qr" ref={qrCodeRef} />
						{activeButton && (
							<StyledButton
								type="button"
								disabled={!activeButton}
								onClick={() => downloadQRCode(qrCodeRef.current)}
							>
								Download QR Code
							</StyledButton>
						)}
					</QrCodeWrapper>
				)}
			</Container>
		</>
	);
}

export default QRGenerator;
