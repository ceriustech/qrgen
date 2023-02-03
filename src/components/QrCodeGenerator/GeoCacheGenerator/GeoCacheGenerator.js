import React, { useState, useRef } from 'react';
import Input from '../../../global/components/Input';
import Button from '../../../global/components/Button';
import QrCodeIcon from '../../../assets/components/QrCodeIcon';
import {
	Container,
	FormWrapper,
	FormHeader,
	StyledForm,
	QrCodeWrapper,
	StyledButtonsWrapper,
} from '../styles';
import { QRCodeCanvas } from 'qrcode.react';
import imageExtension from '../../../data/imgExtenstions';
import mapStyledButton from '../../../global/components/Utility/Functions/mapStyledButton';
import downloadQRCode from '../../../global/components/Utility/Functions/downloadQRCode';

const GeoCacheGenerator = () => {
	const [latitude, setLatitude] = useState('');
	const [longitude, setLongitude] = useState('');
	const [qrCodeSize, setQrCodeSize] = useState(128);
	const [qrCode, setQrCode] = useState();
	const qrCodeRef = useRef();

	const handleChange = (e) => {
		switch (e.target.name) {
			case 'latitude':
				setLatitude(e.target.value);
				break;
			case 'longitude':
				setLongitude(e.target.value);
				break;
			default:
				break;
		}
	};

	function handleSizeChange(event) {
		setQrCodeSize(event.target.value);
	}

	const generateQRCode = (e) => {
		e.preventDefault();
		if (latitude !== '' && longitude !== '') {
			const latLong = `${latitude},${longitude}`;
			setQrCode(
				<QRCodeCanvas
					value={latLong}
					size={qrCodeSize}
					style={{ height: `${qrCodeSize}px`, width: `${qrCodeSize}px` }}
				/>
			);
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
					<p>GeoCache with QR codes.</p>
				</FormHeader>
				<StyledForm id="geocash-form" onSubmit={generateQRCode}>
					<Input
						label="Latitude"
						fieldType="input"
						typeValue="text"
						fieldName="latitude"
						placeHolder="Lat"
						fieldValue={latitude}
						fn={handleChange}
						autoCompleteValue="off"
					/>
					<Input
						label="Longitude"
						fieldType="input"
						typeValue="text"
						fieldName="longitude"
						placeHolder="Long"
						fieldValue={longitude}
						fn={handleChange}
						autoCompleteValue="off"
					/>
					<Input
						label="Choose a size"
						fieldType="input"
						typeValue="number"
						fieldName="size"
						fieldValue={qrCodeSize}
						fn={handleSizeChange}
						disableBottomMargin
					/>
					<br />
					<Button typeValue="submit" isWidth icon={'qrcode'}>
						Create QR Code
					</Button>
				</StyledForm>
			</FormWrapper>
			<QrCodeWrapper>
				<div id="qrcode-geocash" ref={qrCodeRef}>
					{qrCode}
				</div>
				<StyledButtonsWrapper buttonType={type}>
					{(latitude &&
						longitude &&
						qrCode &&
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

export default GeoCacheGenerator;
