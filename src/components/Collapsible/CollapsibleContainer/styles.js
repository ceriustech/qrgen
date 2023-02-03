import styled from 'styled-components';
import { BACKGROUND_COLORS } from '../../../global/styles/Colors';

const { background1 } = BACKGROUND_COLORS;

export const CollapsibleContainer = styled.div`
	background-color: ${background1};
	margin: 2rem auto;
	border-radius: 0.5rem;
	display: grid;
	gap: 1rem 2rem;
	padding: 0 1rem;

	h3 {
		line-height: 1.2;
		font-weight: 500;
	}
`;
