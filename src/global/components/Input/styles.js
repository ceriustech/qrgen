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

export const StyledInput = styled.input`
	${({ disableBottomMargin }) => {
		return css`
			border: 0.1rem solid #e3ecf2;
			border-radius: 0.5rem;
			color: ${baseColor1};
			padding: 0.6rem 0.75rem;
			${disableBottomMargin ? 'margin-bottom : 0' : 'margin-bottom: 2rem'};
			padding: 0.6rem 0.75rem;
			&:nth-child(4) {
				${disableBottomMargin ? 'margin-bottom : 0' : 'margin-bottom: 2rem'};
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
	border: 0.1rem solid #e3ecf2;
	border-radius: 0.5rem;
	color: ${baseColor1};
	padding: 0.6rem 0.75rem;
`;
