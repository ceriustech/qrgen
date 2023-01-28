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
	StyledButtonsWrapper,
} from '../styles';
import imageExtension from '../../../data/imgExtenstions';
import mapStyledButton from '../../../global/components/Utility/Functions/mapStyledButton';
import downloadQRCode from '../../../global/components/Utility/Functions/downloadQRCode';

function LinkGenerator() {
	const [url, setUrl] = useState('');
	const [size, setSize] = useState(128);
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
		let qr;
		if (url) {
			setActiveButton(true);
			removeQRCode();
			qr = new qrcode(qrCodeRef.current, {
				text: url,
				width: size,
				height: size,
			});
		}

		return qr;
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
						<Input
							label="Choose URL"
							fieldType="input"
							typeValue="url"
							fieldName="url"
							placeHolder="Enter URL"
							fieldValue={url}
							fn={handleUrlChange}
						/>
						<Input
							label="Choose URL"
							fieldType="input"
							typeValue="number"
							fieldName="size"
							fieldValue={size}
							fn={handleSizeChange}
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
						<StyledButtonsWrapper>
							{activeButton &&
								mapStyledButton(
									imageExtension,
									activeButton,
									downloadQRCode,
									qrCodeRef.current
								)}
						</StyledButtonsWrapper>
					</QrCodeWrapper>
				)}
			</Container>
		</>
	);
}

export default LinkGenerator;
