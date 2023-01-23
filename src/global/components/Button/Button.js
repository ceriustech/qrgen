import StyledButton from './styles';

const Button = ({ typeValue, width, children, handleClick }) => {
	return (
		<StyledButton type={typeValue} checkWidth={width} onClick={handleClick}>
			{children}
		</StyledButton>
	);
};

export default Button;
