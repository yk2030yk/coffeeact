import React from 'react'
import { useForm } from 'react-hook-form'

import * as S from './index.styled'
import {
  Input,
  BasicBox,
  ErrorText,
  SubmitButton,
  CircularProgress,
} from '@/components/atoms'
import { useAuthLogin } from '@/recoil/auth'

type FormValues = {
  email: string
  password: string
}

const RecommendedCoffeeCards: React.FC = () => {
  const login = useAuthLogin()
  const { register, handleSubmit } = useForm<FormValues>()

  const onSubmit = handleSubmit((data) => {
    login.execute(data.email, data.password)
  })

  return (
    <S.Form onSubmit={onSubmit}>
      <S.Title>CoffeeActへログイン</S.Title>
      <BasicBox>
        <S.IconWrapper>
          <S.Icon size={70} />
        </S.IconWrapper>
      </BasicBox>
      <BasicBox>
        <Input
          type="text"
          name="email"
          ref={register}
          placeholder="USERNAME"
          disabled={login.loadable.isLoading()}
        />
      </BasicBox>
      <BasicBox>
        <Input
          type="password"
          name="password"
          ref={register}
          placeholder="PASSWORD"
          disabled={login.loadable.isLoading()}
        />
      </BasicBox>
      <BasicBox>
        {login.loadable.hasError() && <ErrorText>ログインエラー</ErrorText>}
      </BasicBox>
      {login.loadable.isLoading() && (
        <BasicBox>
          <CircularProgress />
        </BasicBox>
      )}
      <BasicBox>
        <SubmitButton type="submit" value="ログインする" />
      </BasicBox>
    </S.Form>
  )
}

export default RecommendedCoffeeCards
