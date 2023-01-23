import Button from '../../Button';

const mapStyledButton = (imgExtensions, active, downloadCode, codeElement) => {
	const handleDownload = (element, extension) => {
		downloadCode(element, extension);
	};

	return imgExtensions.map((item) => {
		return (
			<Button
				key={item.id}
				typeValue="button"
				disabled={!active}
				handleClick={() => handleDownload(codeElement, item.type)}
			>
				<span>Download</span> <span>{item.extension}</span>
			</Button>
		);
	});
};

export default mapStyledButton;
