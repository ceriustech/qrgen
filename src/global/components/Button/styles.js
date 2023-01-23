import styled, { css } from 'styled-components';
import { TEXT_COLORS, BASE_COLORS } from '../../styles/Colors';

const { white } = TEXT_COLORS;
const { darkBlue, purple, lightPurple } = BASE_COLORS;

const StyledButton = styled.button`
	${({ checkWidth }) => {
		return css`
			border: none;
			border-radius: 0.45rem;
			background: linear-gradient(
				to right,
				${darkBlue},
				${purple},
				${lightPurple}
			);
			color: ${white};
			display: flex;
			flex-direction: column;
			${checkWidth ? 'width: 155px' : 'flex-basis: 33%'};
			font-size: 1rem;
			padding: 0.5rem 1rem;

			&:hover {
				cursor: pointer;
			}
		`;
	}}
`;

export default StyledButton;
