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

function LinkGenerator() {
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
		const qrCode = document.getElementById('qrcode-url');
		while (qrCode.firstChild) {
			qrCode.removeChild(qrCode.firstChild);
		}
	}

	function generateQRCode(event) {
		event.preventDefault();
		setActiveButton(true);
		removeQRCode();
		const qr = new qrcode(qrCodeRef.current, {
			text: url,
			width: size,
			height: size,
		});

		return qr;
	}

	function downloadQRCode(qrCodeElement, ext) {
		const canvas = qrCodeElement.querySelector('canvas');
		const link = document.createElement('a');
		link.download = `qr-code.${ext}`;
		link.href = canvas.toDataURL(`image/${ext}`);
		link.click();
	}

	return (
		<>
			<Container>
				<FormWrapper>
					<FormHeader>
						<h1>
							<span>QR Code</span> <span>Generator</span>
						</h1>
						<p>
							Smartphone users can quickly access your website with the scan of
							a QR Code.
						</p>
					</FormHeader>
					<StyledForm id="url-form" onSubmit={generateQRCode}>
						<label htmlFor="url">Enter URL</label>
						<StyledInput
							type="url"
							placeholder="Enter URL"
							name="url"
							required
							value={url}
							onChange={handleUrlChange}
						/>

						<label htmlFor="size">Choose a size</label>
						<StyledInput
							type="number"
							name="size"
							value={size}
							onChange={handleSizeChange}
							disableBottomMargin
						/>
						<br />
						<Button typeValue="submit" isWidth>
							Create QR Code
						</Button>
					</StyledForm>
				</FormWrapper>
				{qrCodeRef && (
					<QrCodeWrapper>
						<div id="qrcode-url" ref={qrCodeRef} />
						<SyledButtonsWrapper>
							{activeButton &&
								mapStyledButton(
									imageExtension,
									activeButton,
									downloadQRCode,
									qrCodeRef.current
								)}
						</SyledButtonsWrapper>
					</QrCodeWrapper>
				)}
			</Container>
		</>
	);
}

export default LinkGenerator;
