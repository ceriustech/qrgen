import StyledButton from './styles';
import QrCodeIcon from '../../../assets/qr-code-small.svg';
import AccessCodeIcon from '../../../assets/access-code-logo.svg';
import DownloadIcon from '../../../assets/picture-logo.svg';

const Button = ({ typeValue, children, handleClick, isWidth, icon }) => {
	let buttonIcon;
	if (icon === 'qrcode') {
		buttonIcon = QrCodeIcon;
	} else if (icon === 'accesscode') {
		buttonIcon = AccessCodeIcon;
	} else if (icon === 'download') {
		buttonIcon = DownloadIcon;
	}
	return (
		<StyledButton type={typeValue} checkWidth={isWidth} onClick={handleClick}>
			<img src={buttonIcon} alt="Qrgen logo" />
			<span>{children}</span>
		</StyledButton>
	);
};

export default Button;
