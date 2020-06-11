import React, { useState } from 'react'

import * as S from './index.styled'
import UserMenu from './UserMenu'

type Props = {}

const TitleIcon: React.FC<Props> = () => {
  const [isShowMenu, setIsShowMenu] = useState(false)

  return (
    <>
      <S.UserIcon size={40} onClick={() => setIsShowMenu(!isShowMenu)} />
      {isShowMenu && <UserMenu close={() => setIsShowMenu(false)} />}
    </>
  )
}

export default TitleIcon
