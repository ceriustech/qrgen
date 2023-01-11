import styled from 'styled-components';
import {
	TEXT_COLORS,
	BACKGROUND_COLORS,
	BASE_COLORS,
} from '../../global/styles/Colors';

const { white } = TEXT_COLORS;
const { background2, background4 } = BACKGROUND_COLORS;
const { baseColor1 } = BASE_COLORS;

export const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 2rem;
	margin-top: 3rem;
`;

export const FormWrapper = styled.section`
	-webkit-box-shadow: 0px 0px 3px 3px rgba(235, 235, 235, 1);
	-moz-box-shadow: 0px 0px 3px 3px rgba(235, 235, 235, 1);
	box-shadow: 0px 0px 3px 3px rgba(235, 235, 235, 1);
	border-radius: 1rem;
	padding: 2rem;
`;

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
`;

export const QrCodeWrapper = styled.section`
	background-color: ${background4};
	-webkit-box-shadow: 0px 0px 3px 3px rgba(235, 235, 235, 1);
	-moz-box-shadow: 0px 0px 3px 3px rgba(235, 235, 235, 1);
	box-shadow: 0px 0px 3px 3px rgba(235, 235, 235, 1);
	border-radius: 1rem;
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
	background-color: ${background2};
	color: ${white};
	font-size: 0.85rem;
	margin: 0 auto;
	padding: 0.5rem 0.25rem;
	width: 150px;

	&:hover {
		cursor: pointer;
	}
`;
