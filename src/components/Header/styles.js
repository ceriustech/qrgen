import styled from 'styled-components';
import { BACKGROUND_COLORS } from '../../global/styles/Colors';

const { background4, background2 } = BACKGROUND_COLORS;

export const Wrapper = styled.header`
	background-color: ${background4};
	font-size: 12px;
	height: 75px;
	min-width: 100%;
`;

export const LogoContainer = styled.div`
	background-color: ${background2};
	color: #fff;
  display flex;
  justify-content: center;
  align-items: center;
	font-size: 0.75rem;
	text-align: center;
	max-width: 15%;
	height: 100%;
`;
