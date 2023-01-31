import Button from '../../Button';

const mapStyledButton = (
	imgExtensions,
	active,
	downloadCode,
	codeElement,
	icon
) => {
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
				icon={icon}
			>
				<span>Download</span> <span>{item.extension}</span>
			</Button>
		);
	});
};

export default mapStyledButton;
