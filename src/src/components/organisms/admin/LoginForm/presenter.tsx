import React from 'react'

import * as S from './index.styled'
import { BasicBox } from '@/components/atoms'
import { LoginLoading } from '@/components/molecules/loginForm/LoginLoading'
import { InputEmail } from '@/components/molecules/loginForm/InputEmail'
import { InputPassword } from '@/components/molecules/loginForm/InputPassword'
import { LoginErrorMessage } from '@/components/molecules/loginForm/LoginErrorMessage'
import { LoginButton } from '@/components/molecules/loginForm/LoginButton'
import { Loadable } from '@/models'

type Props = {
  loadable: Loadable
}

export const LoginFormPresenter: React.FC<Props> = ({ loadable }) => {
  return (
    <S.Form>
      <S.Title>CoffeeActへログイン</S.Title>

      {loadable.isLoading ? (
        <LoginLoading />
      ) : (
        <>
          <BasicBox>
            <InputEmail />
          </BasicBox>

          <BasicBox>
            <InputPassword />
          </BasicBox>

          <LoginErrorMessage />

          <BasicBox>
            <LoginButton />
          </BasicBox>
        </>
      )}
    </S.Form>
  )
}
