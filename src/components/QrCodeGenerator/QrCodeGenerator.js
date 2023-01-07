import React, { useState, createRef } from 'react';
import qrcode from 'davidshimjs-qrcodejs';

function QRGenerator() {
	const [url, setUrl] = useState('');
	const [size, setSize] = useState(100);
	const qrCodeRef = createRef();

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
		removeQRCode();
		const qr = new qrcode(qrCodeRef.current, {
			width: size,
			height: size,
			text: url,
		});
	}

	return (
		<>
			<header>
				<div>
					<div>QR Code Generator</div>
				</div>
			</header>
			<img src="img/spinner.svg" alt="" />
			<main>
				<div className="flex flex-col-reverse align-center justify-center m-auto md:max-w-4xl p-10 md:flex-row">
					<div className="w-full md:w-2/3 mr-24">
						<h1 className="text-3xl font-bold mb-5 md:text-4xl">
							QR Code Generator
						</h1>
						<p className="mb-4">
							QR Codes allow smartphone users to access your website simply and
							quickly.
						</p>
						<p>
							Enter your URL below to generate a QR Code and download the image.
						</p>

						<form id="generate-form" className="mt-4" onSubmit={handleSubmit}>
							<input
								id="url"
								type="url"
								placeholder="Enter a URL"
								className="w-full border-2 border-gray-200 rounded p-3 text-grey-dark mr-2 focus:outline-none mb-5"
								required
								value={url}
								onChange={handleUrlChange}
							/>

							<select
								className="w-full border-2 border-gray-200 rounded p-3 text-grey-dark mr-2 focus:outline-none"
								name="size"
								id="size"
								value={size}
								onChange={handleSizeChange}
							>
								<option value="100">100x100</option>
								<option value="200">200x200</option>
								<option value="300">300x300</option>
								<option value="400">400x400</option>
								<option value="500">500x500</option>
							</select>

							<button
								type="submit"
								className="w-full bg-red-500 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
							>
								Generate QR Code
							</button>
						</form>
					</div>
					<div id="qr" ref={qrCodeRef} className="w-full md:w-1/3" />
				</div>
			</main>
		</>
	);
}

export default QRGenerator;
