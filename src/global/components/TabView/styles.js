import styled, { css } from 'styled-components';
import { maxView } from '../../styles/mediaQueries';
import { TEXT_COLORS, BASE_COLORS } from '../../styles/Colors';

const maxViewMobileSmall = maxView.mobileS;

const { black } = TEXT_COLORS;
const { purple } = BASE_COLORS;

export const TabViewContainer = styled.div`
	padding: 0 1rem;
`;

export const TabViewWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
	justify-content: center;
	margin-bottom: 1rem;
`;

export const TabButton = styled.button`
	${({ active, index }) => {
		return css`
			${active === index ? `color: ${purple}` : `color: ${black}`};
			${active === index ? 'font-weight: 600' : 'font-weight: 500'};
			padding: 10px 20px;
			background-color: #fff;
			border: 1px solid #ccc;
			border-radius: 1rem;
			border-bottom: none;
			margin: 0 0.5rem;
			cursor: pointer;
			width: 120px;
			&:focus {
				outline: none;
			}
		`;
	}}
`;

export const TabContent = styled.div`
	padding: 1rem;
	border: 1px solid #ccc;

	@media screen and ${maxViewMobileSmall} {
		padding: 0;
	}
`;
