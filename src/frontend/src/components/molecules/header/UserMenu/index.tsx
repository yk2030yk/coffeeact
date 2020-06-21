import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import { RiAdminLine, RiLogoutBoxRLine } from 'react-icons/ri'

import * as S from './index.styled'
import { useAppContext } from '@/contexts/AppContext'

type Props = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const TitleIcon: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const { logout } = useAppContext()
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
