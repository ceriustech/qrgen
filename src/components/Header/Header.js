import { Wrapper, NavContainer, LogoContainer, LogoText } from './styles';
import Logo from '../../assets/qr-code-logo.svg';
// import Logo from '../../assets/Logo';

const Header = () => {
	return (
		<Wrapper>
			<NavContainer>
				<LogoContainer>
					<LogoText>QrGen</LogoText>
					<img src={Logo} alt="Qrgen logo" />
				</LogoContainer>
			</NavContainer>
		</Wrapper>
	);
};

export default Header;
