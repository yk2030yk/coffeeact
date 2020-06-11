import React from 'react'

import * as S from './index.styled'
import TitleIcon from '@/components/molecules/header/TitleIcon'
import UserIcon from '@/components/molecules/header/UserIcon'
import { useAppContext } from '@/contexts/AppContext'

const Header: React.FC = () => {
  const { user } = useAppContext()

  return (
    <S.Wrapper>
      <S.HeaderStart>
        <S.Item>
          <TitleIcon />
        </S.Item>
      </S.HeaderStart>
      <S.HeaderEnd>
        {user && (
          <>
            <S.Item>
              <UserIcon />
            </S.Item>
          </>
        )}
      </S.HeaderEnd>
    </S.Wrapper>
  )
}

export default Header
