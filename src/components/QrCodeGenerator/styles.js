import styled, { css } from 'styled-components';
import {
	TEXT_COLORS,
	BACKGROUND_COLORS,
	BASE_COLORS,
} from '../../global/styles/Colors';
import { maxView, miscMaxView } from '../../global/styles/mediaQueries.styles';

const maxViewMobileSmall = maxView.mobileS;
const maxViewMobileL = maxView.mobileL;
const miscViewLarge = miscMaxView.miscLarge;
const miscViewMedium = miscMaxView.miscMedium;

const { white } = TEXT_COLORS;
const { background4 } = BACKGROUND_COLORS;
const { baseColor1, darkBlue, purple, lightPurple } = BASE_COLORS;

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	grid-gap: 2rem;
	justify-content: center;
	margin-top: 4rem;
	padding: 1rem;
`;

export const FormWrapper = styled.section`
	background-color: ${background4};
	-webkit-box-shadow: 0px 0px 10px 0px rgba(168, 168, 168, 1);
	-moz-box-shadow: 0px 0px 10px 0px rgba(168, 168, 168, 1);
	box-shadow: 0px 0px 10px 0px rgba(168, 168, 168, 1);
	border-radius: 1rem;
	padding: 2rem;
`;

export const FormHeader = styled.div`
	font-size: 12px;
	margin: 0 0 2rem;

	h1 {
		line-height: 3rem;
		display: flex;
		flex-direction: column;
		margin-bottom: 1.5rem;
		span {
			font-size: 3rem;
			font-weight: 600;
			&:nth-child(1) {
				font-size: 2.5rem;
				font-weight: 300;
			}
		}
	}

	p {
		font-size: 1.25rem;
	}
`;

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;

	label {
		margin-bottom: 0.5rem;
	}
`;

export const QrCodeWrapper = styled.section`
	background-color: ${background4};
	-webkit-box-shadow: 0px 0px 10px 0px rgba(168, 168, 168, 1);
	-moz-box-shadow: 0px 0px 10px 0px rgba(168, 168, 168, 1);
	box-shadow: 0px 0px 10px 0px rgba(168, 168, 168, 1);
	border-radius: 1rem;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	row-gap: 1.5rem;
	padding: 2rem;

	@media screen and ${miscViewMedium} {
		height: 526px;
	}
`;

export const StyledInput = styled.input`
	border: 0.1rem solid #e3ecf2;
	border-radius: 0.5rem;
	color: ${baseColor1};
	height: 1.15rem;
	margin-bottom: 2rem;
	padding: 0.6rem 0.75rem;

	&:nth-child(4) {
		margin-bottom: 2.5rem;

		@media screen and ${miscViewLarge} {
			margin-bottom: 1.25rem;
		}

		@media screen and ${maxViewMobileL} {
			margin-bottom: 1rem;
		}
	}
`;

export const SyledButtonsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	justify-content: center;

	@media screen and ${maxViewMobileSmall} {
		gap: 0.5rem;
	}
`;

export const StyledButton = styled.button`
	${({ setWidth }) => {
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
			${setWidth ? 'width: 155px' : 'flex-basis: 33%'};
			font-size: 1rem;
			padding: 0.5rem 1rem;

			&:hover {
				cursor: pointer;
			}
		`;
	}}
`;
