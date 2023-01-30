import styled from 'styled-components';

export const TabViewContainer = styled.div`
	padding: 0 1rem;
`;

export const TabViewWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
	justify-content: center;
	margin-bottom: 0.5rem;
`;

export const TabButton = styled.button`
	padding: 10px 20px;
	background-color: #fff;
	border: 1px solid #ccc;
	border-radius: 1rem;
	border-bottom: none;
	margin: 0 0.5rem;
	cursor: pointer;
	width: 120px;
	&:focus {
		outline: none;
	}
`;

export const TabContent = styled.div`
	padding: 20px;
	border: 1px solid #ccc;
`;
