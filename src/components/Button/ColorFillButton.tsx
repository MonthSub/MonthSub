import styled from '@emotion/styled'
import Button from './Button'
import { darken } from 'polished'

const darkenAmount = 0.06

const ColorFillButton = styled(Button)`
  color: #fff;
  background-color: ${({ theme }) => theme.color.main_coral};
  &:hover {
    color: darken(darkenAmount, #fff);
    background-color: ${({ theme }) =>
      darken(darkenAmount, theme.color.main_coral)};
  }
`

export default ColorFillButton
