function downloadQRCode(qrCodeElement, ext) {
	const canvas = qrCodeElement.querySelector('canvas');
	const link = document.createElement('a');
	link.download = `qr-code.${ext}`;
	link.href = canvas.toDataURL(`image/${ext}`);
	link.click();
}

export default downloadQRCode;
