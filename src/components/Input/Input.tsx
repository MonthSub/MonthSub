import styled from '@emotion/styled'
import { limitCharactersLength } from '@/utils'

interface InputProps extends React.ComponentProps<'input'> {
  label?: string
  validateMessage?: string
}

const Input = ({ label, validateMessage, ...props }: InputProps) => {
  return (
    <InputContainer>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledInput {...props}></StyledInput>
      {validateMessage && (
        <StyledSpan>{limitCharactersLength(validateMessage, 30)}</StyledSpan>
      )}
    </InputContainer>
  )
}

const InputContainer = styled.div`
  width: 100%;
  max-width: 327px;
`

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: ${({ theme }) => theme.fontSize.base_16};
`

const StyledInput = styled.input<InputProps>`
  display: block;
  width: 100%;
  height: 34px;
  border-radius: 2px;
  border: ${({ theme }) => `2px solid ${theme.color.border}`};
  padding: 8px 4px;
  margin-bottom: 6px;
  &:focus {
    border-color: ${({ theme }) => theme.color.main_coral};
    outline-width: 0;
  }
`

const StyledSpan = styled.span`
  display: block;
  height: 14px;
  text-align: right;
  font-size: ${({ theme }) => theme.fontSize.tiny_12};
  color: ${({ theme }) => theme.color.main_coral};
`

export default Input
