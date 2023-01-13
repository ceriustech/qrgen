import styled from 'styled-components';
import {
	TEXT_COLORS,
	BACKGROUND_COLORS,
	BASE_COLORS,
} from '../../global/styles/Colors';

const { white } = TEXT_COLORS;
const { background4 } = BACKGROUND_COLORS;
const { baseColor1, darkBlue, purple, lightPurple } = BASE_COLORS;

export const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 2rem;
	margin-top: 3rem;
`;

export const FormWrapper = styled.section`
	background-color: ${background4};
	-webkit-box-shadow: 0px 0px 10px 0px rgba(168, 168, 168, 1);
	-moz-box-shadow: 0px 0px 10px 0px rgba(168, 168, 168, 1);
	box-shadow: 0px 0px 10px 0px rgba(168, 168, 168, 1);
	border-radius: 1rem;
	padding: 2rem;
`;

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
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
`;

export const InputWrapper = styled.div``;

export const StyledInput = styled.input`
	border: 0.1rem solid #e3ecf2;
	border-radius: 0.5rem;
	color: ${baseColor1};
	height: 1.15rem;
	margin-bottom: 1rem;
	padding: 0.6rem 0.75rem;
`;

export const StyledButton = styled.button`
	border: none;
	border-radius: 0.45rem;
	background: linear-gradient(to right, ${darkBlue}, ${purple}, ${lightPurple});
	color: ${white};
	font-size: 0.85rem;
	margin: 0 auto;
	padding: 0.5rem 0.25rem;
	width: 150px;

	&:hover {
		cursor: pointer;
	}
`;
