import React, { useState, useRef } from 'react';
import Input from '../../../global/components/Input';
import Button from '../../../global/components/Button';
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
	const [cacheLocation, setCacheLocation] = useState({
		latitude: '',
		longitude: '',
		hint: '',
		description: '',
	});

	const handleChange = (event) => {
		setCacheLocation({
			...cacheLocation,
			[event.target.name]: event.target.value,
		});
	};

	return (
		<Container>
			<FormWrapper>
				<FormHeader>
					<h1>
						<span>QR Code</span> <span>Generator</span>
					</h1>
					<p>GeoCache with QR codes.</p>
				</FormHeader>
				<StyledForm>
					<Input
						label="Latitude"
						fieldType="input"
						typeValue="text"
						fieldName="latitude"
						placeHolder="Lat"
						fieldValue={cacheLocation.latitude}
						fn={handleChange}
						autoCompleteValue="off"
					/>
					<Input
						label="Longitude"
						fieldType="input"
						typeValue="text"
						fieldName="longitude"
						placeHolder="Long"
						fieldValue={cacheLocation.longitude}
						fn={handleChange}
						autoCompleteValue="off"
					/>
					<Input
						label="Hint"
						fieldType="input"
						typeValue="text"
						fieldName="hint"
						placeHolder="SSID"
						fieldValue={cacheLocation.hint}
						fn={handleChange}
						autoCompleteValue="off"
					/>
					<Input
						label="Description"
						fieldType="input"
						typeValue="text"
						fieldName="description"
						placeHolder="SSID"
						fieldValue={cacheLocation.description}
						fn={handleChange}
						autoCompleteValue="off"
					/>
				</StyledForm>
			</FormWrapper>
			<QrCodeWrapper>
				<QRCodeCanvas value={JSON.stringify(cacheLocation)} />
			</QrCodeWrapper>
		</Container>
	);
};

export default GeoCacheGenerator;
