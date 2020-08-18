import React from 'react'

import * as S from './index.styled'
import InfoSnackbarMessage from '@/components/molecules/common/InfoSnackbarMessage'
import ErrorSnackbarMessage from '@/components/molecules/common/ErrorSnackbarMessage'
import { SnackbarType, SnackbarMessage } from '@/recoil/snackbar'

type Props = {
  snackbarMessages: SnackbarMessage[]
}

export const SnackbarMessageListPresenter: React.FC<Props> = ({
  snackbarMessages,
}) => (
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
