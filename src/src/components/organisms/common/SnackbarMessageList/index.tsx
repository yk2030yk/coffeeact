import React from 'react'
import { useRecoilValue } from 'recoil'
import * as S from './index.styled'
import InfoSnackbarMessage from '@/components/molecules/common/InfoSnackbarMessage'
import ErrorSnackbarMessage from '@/components/molecules/common/ErrorSnackbarMessage'
import { snackbarMessagesState, SnackbarType } from '@/recoil/snackbar'

const Header: React.FC = () => {
  const snackbarMessages = useRecoilValue(snackbarMessagesState)
  return (
    <>
      {snackbarMessages.length > 0 && (
        <S.Wrapper>
          {snackbarMessages.map((sm) => (
            <>
              {sm.type === SnackbarType.Error && (
                <ErrorSnackbarMessage key={sm.id} message={sm.message} />
              )}
              {sm.type === SnackbarType.INFO && (
                <InfoSnackbarMessage key={sm.id} message={sm.message} />
              )}
            </>
          ))}
        </S.Wrapper>
      )}
    </>
  )
}

export default Header
