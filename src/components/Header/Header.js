import { Wrapper, NavContainer, LogoContainer, LogoText } from './styles';
import Logo from '../../assets/qr-code-logo.svg';

const Header = ({ children }) => {
	return (
		<Wrapper>
			<NavContainer>
				<LogoContainer>
					<LogoText>QrGen</LogoText>
					<img src={Logo} alt="Qrgen logo" />
				</LogoContainer>
				{children}
			</NavContainer>
		</Wrapper>
	);
};

export default Header;
