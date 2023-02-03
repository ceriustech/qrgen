import styled, { css } from 'styled-components';
import { BASE_COLORS } from '../../../global/styles/Colors';

const { background1 } = BASE_COLORS;

export const CollapsibleContainer = styled.section`
	margin: 5rem auto;
	background: ${background1};
	border-radius: 0.5rem;
	max-width: var(--fixed-width);
	display: grid;
	gap: 1rem 2rem;

	h3 {
		line-height: 1.2;
		font-weight: 500;
	}
`;
