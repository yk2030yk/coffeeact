import React from 'react'
import { useRecoilValue } from 'recoil'

import * as S from './index.styled'
import TitleIcon from '@/components/molecules/header/TitleIcon'
import UserIcon from '@/components/molecules/header/UserIcon'
import { userState } from '@/recoil/auth'

const Header: React.FC = () => {
  const user = useRecoilValue(userState)

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
