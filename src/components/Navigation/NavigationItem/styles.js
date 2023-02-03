import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BASE_COLORS, TEXT_COLORS } from '../../../global/styles/Colors';

const { darkBlue, purple } = BASE_COLORS;
const { black } = TEXT_COLORS;

export const NavLink = styled(Link)`
	flex-direction: column;
	font-weight: 500;
	transition: all 0.3s ease-in-out;
	color: ${black};
	background-size: 200% 200%;
	animation: rainbow 2s ease-in-out infinite;
	display: block;
	text-align: center;
	text-transform: uppercase;
	font-size: 1rem;
	margin: 0 0.5rem;

	&:hover {
		background: linear-gradient(to right, ${darkBlue}, ${purple});
		-webkit-background-clip: text;
		background-clip: text;
	}

	@keyframes rainbow {
		0% {
			background-position: left;
		}
		50% {
			background-position: right;
		}
		100% {
			background-position: left;
		}
	}
`;
