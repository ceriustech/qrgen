import StyledButton from './styles';
import QrCodeIcon from '../../../assets/images/qr-code-small.svg';
import AccessCodeIcon from '../../../assets/images/access-code-logo.svg';
import DownloadIcon from '../../../assets/images/picture-logo.svg';

const Button = ({ typeValue, children, handleClick, isWidth, icon, type }) => {
	let buttonIcon;
	if (icon === 'qrcode') {
		buttonIcon = QrCodeIcon;
	} else if (icon === 'accesscode') {
		buttonIcon = AccessCodeIcon;
	} else if (icon === 'download') {
		buttonIcon = DownloadIcon;
	}
	return (
		<StyledButton
			type={typeValue}
			checkWidth={isWidth}
			onClick={handleClick}
			buttonType={type}
		>
			{type !== 'download' && <img src={buttonIcon} alt="Qrgen logo" />}
			<p>{children}</p>
			{type === 'download' && <img src={buttonIcon} alt="Qrgen logo" />}
		</StyledButton>
	);
};

export default Button;
