import styled from 'styled-components';
import { BACKGROUND_COLORS } from '../../global/styles/Colors';
import { maxView, miscMaxView } from '../../global/styles/mediaQueries';

const maxViewMobileSmall = maxView.mobileS;
const miscViewMedium = miscMaxView.miscMedium;

const { background1, background4 } = BACKGROUND_COLORS;

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
		height: 500px;
	}
`;

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
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

export const Divider = styled.div`
	background-color: ${background1};
	height: 2px;
	margin: 1.5rem 0.25rem;
`;
