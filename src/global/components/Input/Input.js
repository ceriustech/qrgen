import { InputWrapper, Label, StyledInput, StyledSelect } from './styles';

export const Input = (props) => {
	function getValue(props) {
		const {
			children,
			label,
			fieldType,
			typeValue,
			fieldName,
			placeHolder,
			fieldValue,
			fn,
			autoCompleteValue,
			disableBottomMargin,
		} = props;

		let field;
		if (fieldType === 'input') {
			field = (
				<InputWrapper>
					<Label htmlFor={fieldName}>{label}</Label>
					<StyledInput
						type={typeValue}
						name={fieldName}
						placeholder={placeHolder || ''}
						value={fieldValue}
						onChange={fn}
						autoComplete={autoCompleteValue || ''}
						disableBottomMargin={disableBottomMargin}
					/>
				</InputWrapper>
			);
		} else {
			field = (
				<InputWrapper>
					<Label htmlFor={fieldName}>{label}</Label>
					<StyledSelect
						type={typeValue}
						name={fieldName}
						placeholder={placeHolder || ''}
						value={fieldValue}
						onChange={fn}
						disableBottomMargin={disableBottomMargin}
					>
						{children}
					</StyledSelect>
				</InputWrapper>
			);
		}
		return field;
	}

	return getValue(props);
};

export default Input;
