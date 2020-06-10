import { styled, theme, colorUtils } from '@/styles'
import { FaUserCircle } from 'react-icons/fa'

export const Wrapper = styled.div`
  background-color: ${theme.color.white};
  height: ${theme.height.header};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: ${theme.zindex.header};
  padding: 0 20px;
  border-bottom: solid 1px ${theme.color.christmasSilver};
`

export const Item = styled.div`
  padding-left: 20px;
  color: black;
`

export const HeaderStart = styled.div``

export const HeaderEnd = styled.div``

export const UserIcon = styled(FaUserCircle)`
  color: ${theme.color.radiantYellow};
  cursor: pointer;
  &:hover {
    color: ${colorUtils.brighten(theme.color.radiantYellow)};
  }
`
