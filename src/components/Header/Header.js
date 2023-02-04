import { Wrapper, NavContainer, LogoContainer, LogoText } from './styles';
import Logo from '../../assets/images/qr-code-logo.svg';

const Header = ({ children }) => {
	return (
		<Wrapper>
			<NavContainer>
				<LogoContainer>
					<LogoText>QRGen</LogoText>
					<img src={Logo} alt="Qrgen logo" />
				</LogoContainer>
				{children}
			</NavContainer>
		</Wrapper>
	);
};

export default Header;
