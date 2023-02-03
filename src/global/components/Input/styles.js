import styled, { css } from 'styled-components';
import { BASE_COLORS } from '../../styles/Colors';
import { maxView, miscMaxView } from '../../styles/mediaQueries';

const maxViewMobileL = maxView.mobileL;
const miscViewLarge = miscMaxView.miscLarge;

const { baseColor1 } = BASE_COLORS;

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Label = styled.label`
	font-weight: 500;
`;

export const StyledInput = styled.input`
	${({ disableBottomMargin }) => {
		return css`
			border: 0.1rem solid #e3ecf2;
			border-radius: 0.5rem;
			color: ${baseColor1};
			${disableBottomMargin ? 'margin-bottom : 0' : 'margin-bottom: 1.5rem'};
			padding: 0.6rem 0.75rem;
			&:nth-child(4) {
				${disableBottomMargin ? 'margin-bottom : 0' : 'margin-bottom: 1.5rem'};
				@media screen and ${miscViewLarge} {
					margin-bottom: 1.25rem;
				}
				@media screen and ${maxViewMobileL} {
					margin-bottom: 1rem;
				}
			}
		`;
	}}
`;

export const StyledSelect = styled.select`
	${({ disableBottomMargin }) => {
		return css`
			background-image: linear-gradient(45deg, transparent 50%, gray 50%),
				linear-gradient(135deg, gray 50%, transparent 50%),
				radial-gradient(#ddd 70%, transparent 72%);
			background-position: calc(100% - 20px) calc(1em + 2px),
				calc(100% - 15px) calc(1em + 2px), calc(100% - 0.5em) 0.5em;
			background-size: 5px 5px, 5px 5px, 1.5em 1.5em;
			background-repeat: no-repeat;
			border: 0.1rem solid #e3ecf2;
			border-radius: 0.5rem;
			color: ${baseColor1};
			${disableBottomMargin ? 'margin-bottom : 0' : 'margin-bottom: 1.5rem'};
			-webkit-appearance: none;
			-moz-appearance: none;
			padding: 0.6rem 0.75rem;
		`;
	}}
`;
