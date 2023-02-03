import styled from 'styled-components';
import { BACKGROUND_COLORS } from '../../../global/styles/Colors';

const { background3, background4 } = BACKGROUND_COLORS;

export const Item = styled.article`
	background-color: #ebedef;
	padding: 1rem 1.5rem;
	border: 2px solid ${background4};
	margin-bottom: 1rem;
	border-radius: 0.5rem;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

export const ItemHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;

	h4 {
		cursor: pointer;
	}
`;

export const ItemButton = styled.button`
	background: ${background3};
	border-color: transparent;
	width: 2rem;
	height: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	cursor: pointer;
	margin-left: 1rem;
	align-self: center;
	min-width: 2rem;
`;
