import styled from '@emotion/styled'

interface ButtonProps extends React.ComponentProps<'button'> {
  round: boolean
}

const Button = ({ round = false, onClick, ...props }) => {
  return <StyledButton onClick={onClick} round={round} {...props} />
}

const StyledButton = styled.button<ButtonProps>`
  width: 100%;
  max-width: 500px;
  height: 40px;
  font-size: 14px;
  font-weight: 400;
  border-radius: ${({ round }) => (round ? '100px' : '2px')};
  transition: all 150ms ease-out;
`

export default Button
