import React from 'react'
import { useForm } from 'react-hook-form'

import * as S from './index.styled'
import { useAppContext } from '@/contexts/AppContext'

type FormValues = {
  email: string
  password: string
}

const RecommendedCoffeeCards: React.FC = () => {
  const { login } = useAppContext()
  const { register, handleSubmit } = useForm<FormValues>()

  const onSubmit = handleSubmit((data) => {
    login(data.email, data.password)
  })

  return (
    <S.Form onSubmit={onSubmit}>
      <S.Title>Login to CoffeeAct</S.Title>
      <S.IconWrapper>
        <S.Icon size={70} />
      </S.IconWrapper>
      <S.FormItem>
        <S.FormLabel>USERNAME</S.FormLabel>
        <S.InputText type="text" name="email" ref={register} />
      </S.FormItem>
      <S.FormItem>
        <S.FormLabel>PASSWORD</S.FormLabel>
        <S.InputText type="password" name="password" ref={register} />
      </S.FormItem>
      <S.FormItem>
        <S.SubmitButton type="submit" value="SignIn" />
      </S.FormItem>
    </S.Form>
  )
}

export default RecommendedCoffeeCards
