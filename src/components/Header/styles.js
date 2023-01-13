import styled from 'styled-components';
import {
	TEXT_COLORS,
	BACKGROUND_COLORS,
	BASE_COLORS,
} from '../../global/styles/Colors';

const { white } = TEXT_COLORS;
const { background1 } = BACKGROUND_COLORS;
const { darkBlue, purple, lightPurple } = BASE_COLORS;

export const Wrapper = styled.header`
	background-color: ${background1};
	font-size: 12px;
	height: 75px;
	min-width: 100%;
`;

export const LogoContainer = styled.div`
background: linear-gradient(
	to right,
	${darkBlue},
	${purple},
	${lightPurple}
);
color: ${white};
	color: #fff;
  display flex;
  justify-content: center;
  align-items: center;
	font-size: 0.75rem;
	text-align: center;
	max-width: 15%;
	height: 100%;
`;
