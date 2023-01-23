import StyledButton from './styles';

const Button = ({ typeValue, children, handleClick, isWidth }) => {
	return (
		<StyledButton type={typeValue} checkWidth={isWidth} onClick={handleClick}>
			{children}
		</StyledButton>
	);
};

export default Button;
