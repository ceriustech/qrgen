import styled, { css } from 'styled-components';
import { TEXT_COLORS, BASE_COLORS } from '../../styles/Colors';
import { maxView } from '../../styles/mediaQueries';

const { white } = TEXT_COLORS;
const { darkBlue, purple, lightPurple } = BASE_COLORS;
const maxViewTablet = maxView.tablet;
const maxViewMobileLarge = maxView.mobileL;

const StyledButton = styled.button`
	${({ checkWidth, buttonType }) => {
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
			${buttonType === 'download' ? 'align-items: end' : 'align-items: center'};
			${checkWidth ? 'width: 225px' : 'flex-basis: 33%'};
			justify-content: center;
			font-size: 12px;
			padding: 0.5rem;
			position: relative;
			${buttonType === 'download' ? 'width: 104px;' : ''}

			p {
				display: flex;
				flex-direction: column;
				font-size: 1.05rem;
				${buttonType === 'download' ? 'text-align: left' : 'text-align: unset'};
				${buttonType === 'download'
					? 'margin-left: 0.75rem'
					: 'margin-left : .25rem'};

				@media screen and ${maxViewTablet} {
					font-size: 0.95rem;
				}

				@media screen and ${maxViewMobileLarge} {
					font-size: 0.9rem;
				}
			}

			img {
				@media screen and ${maxViewTablet} {
					${buttonType === 'download' && 'padding-right: .5rem;'};
				}
			}

			&:hover {
				cursor: pointer;
			}
		`;
	}}
`;

export default StyledButton;
