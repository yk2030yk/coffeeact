import React from 'react'
import { useHistory } from 'react-router-dom'

import * as S from './index.styled'
import { useAppContext } from '@/contexts/AppContext'
type Props = {
  close: () => void
}

const TitleIcon: React.FC<Props> = ({ close }) => {
  const { logout } = useAppContext()
  const history = useHistory()

  return (
    <S.Wrapper onClick={close}>
      <S.Menu onClick={(e) => e.stopPropagation()}>
        <S.MenuItem onClick={() => history.push('/admin/home')}>
          Admin Home
        </S.MenuItem>
        <S.MenuItem onClick={() => logout()}>Sing Out</S.MenuItem>
      </S.Menu>
    </S.Wrapper>
  )
}

export default TitleIcon
