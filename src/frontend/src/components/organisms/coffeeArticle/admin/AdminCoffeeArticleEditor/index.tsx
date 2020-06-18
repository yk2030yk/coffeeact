import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import * as S from './index.styled'

import { BasicBox, SubmitButton, Heading } from '@/components/atoms'
import {
  AdminCoffeeArticleTitleEditor,
  AdminCoffeeArticleDescriptionEditor,
  AdminCoffeeArticleImageEditor,
  AdminCoffeeArticleTagEditor,
  AdminCoffeeArticleTagList,
} from '@/components/molecules/coffeeArticle/admin'
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
  const [isSaving, setIsSaving] = useState<boolean>(false)

  const onSubmit = handleSubmit(async (data) => {
    setIsSaving(true)
    const article = formValuesToModel(data, coffeeArticle)
    const path = `public/${randomString()}.png`
    upload(path)
    article.imgSrc = path
    try {
      await coffeeArticleService.update(article)
      alert('success!!')
    } catch (e) {
      alert('error...')
    }
    setIsSaving(false)
  })

  return (
    <S.Wrapper>
      {coffeeArticle && (
        <>
          <form onSubmit={onSubmit}>
            <BasicBox>
              <Heading>見出し画像</Heading>
            </BasicBox>
            <BasicBox>
              <AdminCoffeeArticleImageEditor
                coffeeArticle={coffeeArticle}
                file={file}
                setFile={setFile}
              />
            </BasicBox>

            <BasicBox>
              <Heading>記事タグ</Heading>
            </BasicBox>
            <BasicBox>
              <AdminCoffeeArticleTagEditor
                coffeeArticle={coffeeArticle}
                updateModel={updateModel}
              />
            </BasicBox>
            <BasicBox>
              <AdminCoffeeArticleTagList
                coffeeArticle={coffeeArticle}
                updateModel={updateModel}
              />
            </BasicBox>

            <BasicBox>
              <Heading>記事タイトル</Heading>
            </BasicBox>
            <BasicBox>
              <AdminCoffeeArticleTitleEditor
                coffeeArticle={coffeeArticle}
                register={register}
              />
            </BasicBox>

            <BasicBox>
              <Heading>記事コンテンツ</Heading>
            </BasicBox>
            <BasicBox>
              <AdminCoffeeArticleDescriptionEditor
                coffeeArticle={coffeeArticle}
                register={register}
              />
            </BasicBox>

            <BasicBox>{isSaving && <p>saving...</p>}</BasicBox>

            <BasicBox>
              <SubmitButton type="submit" value="保存する" />
            </BasicBox>
          </form>
        </>
      )}
    </S.Wrapper>
  )
}

export default Page
