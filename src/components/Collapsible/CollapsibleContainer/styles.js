import styled from 'styled-components';
import { BACKGROUND_COLORS, TEXT_COLORS } from '../../../global/styles/Colors';
import { maxView } from '../../../global/styles/mediaQueries';

const { background1 } = BACKGROUND_COLORS;
const { black } = TEXT_COLORS;
const maxViewTablet = maxView.tablet;

export const CollapsibleContainer = styled.div`
	background-color: ${background1};
	font-size: 12px;
	margin: 2rem auto;
	border-radius: 0.5rem;
	display: flex;
	flex-direction: column;
	gap: 1rem 2rem;
	padding: 0 1rem;
	max-width: 75%;

	h1 {
		font-size: 2.5rem;
		margin-bottom: 2rem;

		@media screen and ${maxViewTablet} {
			font-size: 2rem;
		}
	}

	h3 {
		color: ${black};
		font-size: 1.25rem;
		font-weight: 400;
		line-height: 1.2;
		margin-bottom: 2rem;
	}

	@media screen and ${maxViewTablet} {
		max-width: 100%;
	}
`;
