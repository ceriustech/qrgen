import styled, { css } from 'styled-components';
import {
	BACKGROUND_COLORS,
	BASE_COLORS,
	TEXT_COLORS,
} from '../../../global/styles/Colors';

const { background3, background4 } = BACKGROUND_COLORS;
const { purple } = BASE_COLORS;
const { black } = TEXT_COLORS;

export const Item = styled.article`
	background-color: #ebedef;
	border: 2px solid ${background4};
	font-size: 1rem;
	margin-bottom: 1rem;
	border-radius: 0.5rem;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

	p {
		color: ${black};
		padding: 0 1.5rem 1rem;
	}
`;

export const ItemHeader = styled.header`
	${({ isExpanded }) => {
		return css`
			display: flex;
			font-weight: 500;
			transition: all 0.3s ease-in-out;
			color: ${isExpanded ? purple : black};
			justify-content: space-between;
			align-items: center;
			padding: 1rem 1.5rem;

			&:hover {
				color: ${purple};
				cursor: pointer;
			}
		`;
	}}
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
