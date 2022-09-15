import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Button from './Button'

const LineButton = styled(Button)`
  ${({ theme }) => css`
    border: 1px solid ${theme.color.border};
    color: ${theme.color.gray_2};
    &:hover {
      border-color: ${theme.color.main_coral};
      color: ${theme.color.main_coral};
    }
  `}
`

export default LineButton
