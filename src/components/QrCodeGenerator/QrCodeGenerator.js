import React, { useState, useRef } from 'react';
import qrcode from 'davidshimjs-qrcodejs';

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
			<main>
				<div>
					<div>
						<h1>QR Code Generator</h1>
						<p>
							Smartphone users can quickly access your website with the tap of a
							QR Code.
						</p>
						<p>
							Enter your URL below to generate a QR Code and download the image.
						</p>

						<form id="generate-form" onSubmit={handleSubmit}>
							<input
								type="url"
								placeholder="Enter a URL"
								required
								value={url}
								onChange={handleUrlChange}
							/>

							<input
								type="number"
								name="size"
								value={size}
								onChange={handleSizeChange}
							/>

							<button type="submit">Generate QR Code</button>
						</form>
					</div>
					{qrCodeRef && (
						<div>
							<div id="qr" ref={qrCodeRef} />
							{activeButton && (
								<button
									type="button"
									disabled={!activeButton}
									onClick={() => downloadQRCode(qrCodeRef.current)}
								>
									Download QR Code
								</button>
							)}
						</div>
					)}
				</div>
			</main>
		</>
	);
}

export default QRGenerator;
