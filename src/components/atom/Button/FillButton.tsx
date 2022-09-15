import styled from '@emotion/styled'
import Button from './Button'

const FillButton = styled(Button)`
  color: #fff;
  background-color: #000;
  transition: background-color 150ms ease-out;
  &:hover {
    background-color: ${({ theme }) => theme.color.main_coral};
  }
`

export default FillButton
