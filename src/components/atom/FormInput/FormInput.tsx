import styled from '@emotion/styled'
import { limitCharactersLength } from '@/utils'

interface FormInputProps extends React.ComponentProps<'input'> {
  label?: string
  errorMessage?: string
}

const FormInput = ({
  label,
  errorMessage,
  className,
  ...props
}: FormInputProps) => {
  return (
    <FormInputBox className={className}>
      {label && <Label>{label}</Label>}
      <Input {...props} />
      {errorMessage && (
        <ErrorText>{limitCharactersLength(errorMessage, 30)}</ErrorText>
      )}
    </FormInputBox>
  )
}

const FormInputBox = styled.div`
  width: 100%;
  max-width: 327px;
`

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: ${({ theme }) => theme.fontSize.base_16};
`

const Input = styled.input<FormInputProps>`
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

const ErrorText = styled.span`
  display: block;
  height: 14px;
  text-align: right;
  font-size: ${({ theme }) => theme.fontSize.tiny_12};
  color: ${({ theme }) => theme.color.main_coral};
`

export default FormInput
