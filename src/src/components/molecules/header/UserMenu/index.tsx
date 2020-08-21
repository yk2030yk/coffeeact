import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'

import * as S from './styled'
import { RiAdminLine, RiLogoutBoxRLine } from '@/components/atoms/icons'
import { useAuthLogout } from '@/recoil/auth'

type Props = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const TitleIcon: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const logout = useAuthLogout()
  const history = useHistory()

  const spring = useSpring({
    opacity: isOpen ? '1' : '0',
  })

  return (
    <animated.div style={spring}>
      <S.Wrapper onClick={() => setIsOpen(false)}>
        <S.Menu onClick={(e) => e.stopPropagation()}>
          <S.MenuItem onClick={() => history.push('/admin/home')}>
            <RiAdminLine size={20} />
            <p>管理画面</p>
          </S.MenuItem>
          <S.MenuItem onClick={() => logout.execute()}>
            <RiLogoutBoxRLine size={20} />
            <p>ログアウトする</p>
          </S.MenuItem>
        </S.Menu>
      </S.Wrapper>
    </animated.div>
  )
}

export default TitleIcon
