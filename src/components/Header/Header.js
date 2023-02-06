import { Wrapper, NavContainer, LogoContainer, LogoText } from './styles';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/qr-code-logo.svg';

const Header = ({ children }) => {
	return (
		<Wrapper>
			<NavContainer>
				<Link to="/">
					<LogoContainer>
						<LogoText>QRGen</LogoText>
						<img src={Logo} alt="Qrgen logo" />
					</LogoContainer>
				</Link>
				{children}
			</NavContainer>
		</Wrapper>
	);
};

export default Header;
