import React from 'react'
import { useRecoilValue } from 'recoil'

import * as S from './index.styled'
import { BasicBox } from '@/components/atoms'
import { LoginLoading } from '@/components/molecules/loginForm/LoginLoading'
import { InputEmail } from '@/components/molecules/loginForm/InputEmail'
import { InputPassword } from '@/components/molecules/loginForm/InputPassword'
import { LoginErrorMessage } from '@/components/molecules/loginForm/LoginErrorMessage'
import { LoginButton } from '@/components/molecules/loginForm/LoginButton'
import { loadableSelector } from '@/recoil/loadable'

const RecommendedCoffeeCards: React.FC = () => {
  const loadable = useRecoilValue(loadableSelector('login'))

  return (
    <S.Form>
      <S.Title>CoffeeActへログイン</S.Title>

      {loadable.isLoading() ? (
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

export default RecommendedCoffeeCards
