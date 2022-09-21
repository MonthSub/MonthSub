import styled from '@emotion/styled'

interface TagProps extends React.ComponentProps<'div'> {
  reverse: boolean
}

const Tag = ({ children, reverse, ...props }) => {
  return (
    <TagBox reverse={reverse} {...props}>
      {children}
    </TagBox>
  )
}

const TagBox = styled.div<TagProps>`
  width: 48px;
  height: 24px;
  font-size: 12px;
  padding: 4px;
  border-radius: 12px;
  text-align: center;
  line-height: 1.5;
`

export default Tag
