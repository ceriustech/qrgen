import styled, { css } from 'styled-components';

export const TabContainer = styled.div`
	display: flex;
	justify-content: center;
`;

export const TabButton = styled.button`
	padding: 10px 20px;
	margin: 0 10px;
	background-color: #fff;
	border: 1px solid #ccc;
	border-bottom: none;
	border-radius: 0.45rem;
	cursor: pointer;
	&:focus {
		outline: none;
	}
`;

export const TabContent = styled.div`
	padding: 20px;
	border: 1px solid #ccc;
`;
