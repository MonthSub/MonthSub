import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Tag from './Tag'

const MainTag = styled(Tag)`
  ${({ theme, reverse }) => css`
    border: 1px solid ${theme.color.main_coral};
    color: ${reverse ? theme.color.main_coral : '#fff'};
    background-color: ${reverse ? '#fff' : theme.color.main_coral};
  `}
`

export default MainTag
