import React, { useState, useRef } from 'react';
import qrcode from 'davidshimjs-qrcodejs';
import {
	Container,
	FormWrapper,
	FormHeader,
	StyledForm,
	QrCodeWrapper,
	StyledInput,
	SyledButtonsWrapper,
	StyledButton,
} from './styles';
import imageExtension from '../../../data/imgExtenstions';

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
			width: size,
			height: size,
			text: url,
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

	function mapStyledButton(imgExtenstions) {
		console.log('EXT', imgExtenstions);
		return imgExtenstions.map((item) => {
			return (
				<StyledButton
					key={item.id}
					type="button"
					disabled={!activeButton}
					onClick={() => downloadQRCode(qrCodeRef.current, item.extension)}
				>
					<span>Download</span> <span>{item.extension}</span>
				</StyledButton>
			);
		});
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
					<StyledForm id="generate-form" onSubmit={generateQRCode}>
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
						/>

						<StyledButton type="submit" setWidth={true}>
							Create QR Code
						</StyledButton>
					</StyledForm>
				</FormWrapper>
				{qrCodeRef && (
					<QrCodeWrapper>
						<div id="qrcode-url" ref={qrCodeRef} />
						<SyledButtonsWrapper>
							{activeButton && mapStyledButton(imageExtension)}
						</SyledButtonsWrapper>
					</QrCodeWrapper>
				)}
			</Container>
		</>
	);
}

export default LinkGenerator;
