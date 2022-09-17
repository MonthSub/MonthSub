import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Tag from './Tag'

const SubTag = styled(Tag)`
  ${({ theme, reverse }) => css`
    border: 1px solid ${theme.color.gray_3};
    color: ${reverse ? theme.color.gray_3 : '#fff'};
    background-color: ${reverse ? '#fff' : theme.color.gray_3};
  `}
`

export default SubTag
