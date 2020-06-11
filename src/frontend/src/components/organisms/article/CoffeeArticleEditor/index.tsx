import React from 'react'
import { useForm } from 'react-hook-form'
import cryptoRandomString from 'crypto-random-string'

import * as S from './index.styled'
import CoffeeArticleEditor from '@/components/molecules/article/CoffeeArticleEditor'
import ImageInput from '@/components/molecules/article/ImageInput'
import { CoffeeArticle } from '@/models/article/CoffeeArticle'
import { coffeeArticleService } from '@/service/firestore/CoffeeArticleService'
import { useUploadImage } from '@/hooks/storage/useUploadImage'

type FormValues = {
  title: string
  description: string
}

const formValuesToModel = (formValues: FormValues) => {
  return new CoffeeArticle(formValues)
}

const Page: React.FC = () => {
  const { upload, setFile } = useUploadImage()
  const { register, handleSubmit } = useForm<FormValues>()

  const onSubmit = handleSubmit((data) => {
    const article = formValuesToModel(data)
    const name = cryptoRandomString({ length: 10, type: 'url-safe' })
    const path = `public/${name}.png`
    upload(path)
    article.imgSrc = path
    coffeeArticleService.create(article)
  })

  return (
    <S.Wrapper>
      <ImageInput setFile={setFile} />
      <form onSubmit={onSubmit}>
        <CoffeeArticleEditor register={register} />
        <input type="submit" />
      </form>
    </S.Wrapper>
  )
}

export default Page
