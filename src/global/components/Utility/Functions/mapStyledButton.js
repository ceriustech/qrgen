import Button from '../../Button';

const mapStyledButton = (
	imgExtensions,
	active,
	downloadCode,
	codeElement,
	icon,
	type
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
				type={type}
			>
				<span>Download {item.extension}</span>
			</Button>
		);
	});
};

export default mapStyledButton;
