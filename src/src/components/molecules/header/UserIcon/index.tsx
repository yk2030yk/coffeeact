import React, { useState } from 'react'

import profileSrc from '@/assets/images/profile-icon.gif'
import * as S from './styled'
import UserMenu from '../UserMenu'

type Props = {}

const TitleIcon: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <S.UserIcon onClick={() => setIsOpen(!isOpen)}>
        <img src={profileSrc} alt="" />
      </S.UserIcon>
      {isOpen && <UserMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  )
}

export default TitleIcon
