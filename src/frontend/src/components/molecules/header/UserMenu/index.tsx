import React from 'react'

import * as S from './index.styled'
import { useAppContext } from '@/contexts/AppContext'
type Props = {
  close: () => void
}

const TitleIcon: React.FC<Props> = ({ close }) => {
  const { logout } = useAppContext()
  return (
    <S.Wrapper onClick={close}>
      <S.Menu onClick={(e) => e.stopPropagation()}>
        <S.MenuItem onClick={() => logout()}>Sing Out</S.MenuItem>
      </S.Menu>
    </S.Wrapper>
  )
}

export default TitleIcon
