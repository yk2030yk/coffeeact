import React from 'react'

import * as S from './styled'
import TitleIcon from '@/components/molecules/header/TitleIcon'
import UserIcon from '@/components/molecules/header/UserIcon'
import { User } from '@/models'

type Props = {
  user: User | null
}

export const HeaderPresenter: React.FC<Props> = ({ user }) => (
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
