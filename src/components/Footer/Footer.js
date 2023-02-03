import {
	Wrapper,
	Container,
	CaptionTextContainer,
	CaptionText,
	LogoContainer,
	LogoText,
} from './styles';
import Logo from '../../assets/images/qr-code-logo.svg';

const Footer = () => (
	<Wrapper>
		<Container>
			<LogoContainer>
				<LogoText>QrGen</LogoText>
				<img src={Logo} alt="Qrgen logo" />
			</LogoContainer>
			<CaptionTextContainer>
				<CaptionText>Created by Bilal Masters</CaptionText>
				<CaptionText>Lifengineered &#x40;2023 ALL RIGHTS RESERVED</CaptionText>
			</CaptionTextContainer>
		</Container>
	</Wrapper>
);

export default Footer;
