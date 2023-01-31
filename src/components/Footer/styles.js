import styled from 'styled-components';
import {
	BACKGROUND_COLORS,
	BASE_COLORS,
	TEXT_COLORS,
} from '../../global/styles/Colors';
import { maxView } from '../../global/styles/mediaQueries';

const { background4 } = BACKGROUND_COLORS;
const { black } = TEXT_COLORS;
const { darkBlue, purple } = BASE_COLORS;
const maxViewMobileLarge = maxView.mobileL;
const maxViewMobileSmall = maxView.mobileS;

export const FooterContainer = styled.footer`
	background: ${background4};
	padding: 50px 15px;
`;

export const CaptionTextContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	justify-items: flex-start;
	margin: 0 auto;
	max-width: 1200px;
	padding-left: 30px;

	@media screen and ${maxViewMobileLarge} {
		padding-left: 25px;
	}

	@media screen and ${maxViewMobileSmall} {
		padding-left: 10px;
	}
`;

export const CaptionText = styled.p`
	color: ${black};
	grid-column: 1 / span 1;
	font-size: 1rem;
	font-weight: 600;
	margin: 40px 0 15px;
	text-transform: capitalize;
	&&:nth-child(2) {
		margin: 0;
	}
`;
