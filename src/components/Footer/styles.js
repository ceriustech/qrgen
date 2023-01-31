import styled from 'styled-components';
import {
	BACKGROUND_COLORS,
	BASE_COLORS,
	TEXT_COLORS,
} from '../../global/styles/Colors';
import { maxView } from '../../global/styles/mediaQueries';

const { backbround1, background4 } = BACKGROUND_COLORS;
const { black } = TEXT_COLORS;
const { darkBlue, purple } = BASE_COLORS;
const maxViewMobileLarge = maxView.mobileL;
const maxViewMobileSmall = maxView.mobileS;

export const Wrapper = styled.footer`
	background: ${backbround1};
	border-top: 1px solid ${background4};
	padding: 15px;
`;

export const Container = styled.div`
	display: flex;
	align-items: center;
	margin: 0 auto;
	max-width: 1200px;
	padding: 2rem 1rem 0;

	@media screen and ${maxViewMobileLarge} {
		flex-direction: column;
		align-items: flex-start;
	}
`;

export const LogoContainer = styled.div`
	display: flex;
	align-items: initial;

	@media screen and ${maxViewMobileLarge} {
		margin-top: 2rem;
	}
`;

export const LogoText = styled.h1`
	color: transparent;
	background: linear-gradient(to right, ${darkBlue}, ${purple});
	background-clip: text;
	-webkit-background-clip: text;
	font-size: 1.75rem;

	@media screen and ${maxViewMobileLarge} {
		font-size: 1.5rem;
	}
`;

export const CaptionTextContainer = styled.div`
	display: flex;
	margin: 0 auto;
	padding-left: 30px;

	@media screen and ${maxViewMobileLarge} {
		padding-left: 0;
		flex-direction: column;
		align-items: flex-start;
		margin-left: 0;
		margin-top: 0.5rem;
	}
`;

export const CaptionText = styled.p`
	color: ${black};
	grid-column: 1 / span 1;
	font-size: 1rem;
	font-weight: 600;
	margin: 30px 0 15px;
	padding: 1rem;
	text-transform: capitalize;

	@media screen and ${maxViewMobileLarge} {
		margin: 0;
		padding: 1rem 0 0;
	}
`;
