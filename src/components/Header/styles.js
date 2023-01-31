import styled from 'styled-components';
import { BACKGROUND_COLORS, BASE_COLORS } from '../../global/styles/Colors';
import { maxView } from '../../global/styles/mediaQueries';

const { background1 } = BACKGROUND_COLORS;
const { darkBlue, purple } = BASE_COLORS;
const maxViewMobileLarge = maxView.mobileL;

export const Wrapper = styled.header`
	background-color: ${background1};
	font-size: 12px;
	height: 75px;
	min-width: 100%;
`;

export const NavContainer = styled.div`
  display flex;
  justify-content: flex-start;
  align-items: center;
	font-size: 12px;
	text-align: center;
	margin: 0 auto;
	max-width: 1200px;
	padding: 0 1rem;
	height: 100%;
`;

export const Logo = styled.h1`
	color: transparent;
	background: linear-gradient(to right, ${darkBlue}, ${purple});
	background-clip: text;
	-webkit-background-clip: text;
	font-size: 2rem;

	@media screen and ${maxViewMobileLarge} {
		font-size: 1.5rem;
	}
`;
