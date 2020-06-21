import React, { useState } from 'react'

import * as S from './index.styled'
import UserMenu from '../UserMenu'

type Props = {}

const TitleIcon: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <S.UserIcon size={40} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && <UserMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  )
}

export default TitleIcon
