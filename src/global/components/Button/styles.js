import styled, { css } from 'styled-components';
import { TEXT_COLORS, BASE_COLORS } from '../../styles/Colors';
import { maxView } from '../../styles/mediaQueries';

const { white } = TEXT_COLORS;
const { darkBlue, purple, lightPurple } = BASE_COLORS;
const maxViewMobileLarge = maxView.mobileL;

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
			align-items: center;
			${checkWidth ? 'width: 225px' : 'flex-basis: 33%'};
			justify-content: center;
			font-size: 1rem;
			padding: 0.5rem 1rem;

			span {
				margin-left: 0.5rem;
			}

			&:hover {
				cursor: pointer;
			}

			@media screen and ${maxViewMobileLarge} {
				font-size: 0.9rem;
			}
		`;
	}}
`;

export default StyledButton;
