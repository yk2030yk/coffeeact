import React from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import * as S from './index.styled'
import AdminCoffeeArticleEditor from '@/components/molecules/article/AdminCoffeeArticleEditor'
import { CoffeeArticle } from '@/models/article/CoffeeArticle'
import { coffeeArticleService } from '@/service/firestore/CoffeeArticleService'
import { useUploadImage } from '@/hooks/storage/useUploadImage'
import { useCoffeeArticle } from '@/hooks/firestore/useCoffeeArticle'
import { randomString } from '@/utils/util'

type FormValues = {
  title: string
  description: string
}

const formValuesToModel = (
  formValues: FormValues,
  coffeeArticle: CoffeeArticle | undefined
) => {
  return new CoffeeArticle({
    ...coffeeArticle?.toJson(),
    ...formValues,
  })
}

const Page: React.FC = () => {
  const { articleId } = useParams()
  const { coffeeArticle, updateModel } = useCoffeeArticle(articleId)
  const { upload, setFile, file } = useUploadImage()
  const { register, handleSubmit } = useForm<FormValues>()

  const onSubmit = handleSubmit((data) => {
    const article = formValuesToModel(data, coffeeArticle)
    const path = `public/${randomString()}.png`
    upload(path)
    article.imgSrc = path
    coffeeArticleService.update(article)
  })

  return (
    <S.Wrapper>
      {coffeeArticle && (
        <>
          <form onSubmit={onSubmit}>
            <AdminCoffeeArticleEditor
              coffeeArticle={coffeeArticle}
              updateModel={updateModel}
              register={register}
              file={file}
              setFile={setFile}
            />
            <S.SaveButton type="submit" value="保存する" />
          </form>
        </>
      )}
    </S.Wrapper>
  )
}

export default Page
