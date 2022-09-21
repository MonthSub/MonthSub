import LikeSvg from '../../../../public/statics/svg/ic-like.svg'
import styled from '@emotion/styled'

interface LikeProps extends React.ComponentProps<'div'> {
  mode: 'small' | 'large'
}

const LikeIcon = styled(LikeSvg)`
  transform: ${({ mode }) => (mode === 'small' ? 'scale(0.5)' : 'scale(0.8)')};
  path {
    fill: ${({ theme }) => theme.color.main_coral};
  }
`

const Like = ({ mode, ...props }: LikeProps) => {
  return <LikeIcon mode={mode} {...props} />
}

export default Like
