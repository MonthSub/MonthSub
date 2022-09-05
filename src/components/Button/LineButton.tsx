import styled from '@emotion/styled'
import Button from './Button'

const LineButton = styled(Button)`
  border: ${({ theme }) => `1px solid ${theme.color.border}`};
  color: ${({ theme }) => theme.color.gray_2};
  &:hover {
    border-color: ${({ theme }) => theme.color.main_coral};
    color: ${({ theme }) => theme.color.main_coral};
  }
`

export default LineButton
