import styled from '@emotion/styled'

type ButtonProps = React.ComponentProps<'button'>

const Button = styled.button<ButtonProps>`
  width: 100%;
  max-width: 500px;
  height: 40px;
  font-size: 14px;
  font-weight: 400;
  border-radius: 2px;
  transition: all 150ms ease-out;
`

export default Button
