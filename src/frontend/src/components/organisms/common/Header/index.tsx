import React from 'react'

import * as S from './index.styled'
import TitleIcon from '@/components/molecules/header/TitleIcon'
import { useAppContext } from '@/contexts/AppContext'

const Header: React.FC = () => {
  const { user, logout } = useAppContext()
  return (
    <S.Wrapper>
      <S.Item>
        <TitleIcon />
      </S.Item>
      {user && (
        <>
          <S.Item>ログイン済み</S.Item>
          <S.Item>
            <button onClick={() => logout()}>logout</button>
          </S.Item>
        </>
      )}
    </S.Wrapper>
  )
}

export default Header
