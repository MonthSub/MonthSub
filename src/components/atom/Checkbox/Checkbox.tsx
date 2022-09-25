import styled from '@emotion/styled'

interface CheckboxProps {
  toggle: boolean
  text?: string
  name?: string
}

const Checkbox = ({ toggle = false, name = '', text = '' }) => {
  return (
    <CheckboxSpan toggle={toggle}>
      <input type="checkbox" name={name} />
      <label htmlFor={name}>{text}</label>
    </CheckboxSpan>
  )
}

const CheckboxSpan = styled.span<CheckboxProps>`
  padding: 8px 16px;
  line-height: 32px;
  font-size: 12px;
  border-radius: 16px;
  background-color: ${({ theme, toggle }) =>
    toggle ? '#fff' : theme.color.main_coral};
  color: ${({ theme, toggle }) => (toggle ? theme.color.main_coral : '#fff')};
  border: ${({ theme }) => `1px solid ${theme.color.main_coral}`};

  &:hover {
    background-color: ${({ theme, toggle }) =>
      toggle ? theme.color.main_coral : '#fff'};
    color: ${({ theme, toggle }) => (toggle ? '#fff' : theme.color.main_coral)};
  }

  > input {
    display: none;
  }
`

export default Checkbox
