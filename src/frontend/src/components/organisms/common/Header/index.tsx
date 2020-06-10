import React, { useState } from 'react'

import * as S from './index.styled'
import TitleIcon from '@/components/molecules/header/TitleIcon'
import UserMenu from '@/components/molecules/header/UserMenu'
import { useAppContext } from '@/contexts/AppContext'

const Header: React.FC = () => {
  const { user } = useAppContext()
  const [isShowMenu, setIsShowMenu] = useState(false)

  return (
    <>
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
                <S.UserIcon
                  size={40}
                  onClick={(e) => setIsShowMenu(!isShowMenu)}
                />
              </S.Item>
            </>
          )}
        </S.HeaderEnd>
      </S.Wrapper>
      {user && isShowMenu && <UserMenu close={() => setIsShowMenu(false)} />}
    </>
  )
}

export default Header
