import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

import * as S from './index.styled'

import { BasicBox, SubmitButton, Heading } from '@/components/atoms'
import {
  AdminArticleTitleEditor,
  AdminArticleDescriptionEditor,
  AdminArticleImageEditor,
  AdminArticleTagEditor,
  AdminArticleTagList,
} from '@/components/molecules/article/admin'
import { Article } from '@/models/article/Article'
import { articleService } from '@/service/firestore/ArticleService'
import { useUploadImage } from '@/hooks/storage/useUploadImage'
import { useArticle } from '@/hooks/firestore/useArticle'
import { randomString } from '@/utils/util'

type FormValues = {
  title: string
  description: string
}

const formValuesToModel = (
  formValues: FormValues,
  article: Article | undefined
) => {
  return new Article({
    ...article?.toJson(),
    ...formValues,
  })
}

const Page: React.FC = () => {
  const history = useHistory()
  const { article, updateModel } = useArticle()
  const { upload, setFile, file } = useUploadImage()
  const { register, handleSubmit } = useForm<FormValues>()
  const [isSaving, setIsSaving] = useState<boolean>(false)

  const onSubmit = handleSubmit(async (data) => {
    setIsSaving(true)
    const newArticle = formValuesToModel(data, article)
    const path = `public/${randomString()}.png`
    upload(path)
    newArticle.imgSrc = path
    try {
      const id = await articleService.create(newArticle)
      alert('success!!')
      history.push(`/admin/article/${id}`)
    } catch (e) {
      alert('error...')
    }
    setIsSaving(false)
  })

  return (
    <S.Wrapper>
      {article && (
        <>
          <form onSubmit={onSubmit}>
            <BasicBox>
              <Heading>見出し画像</Heading>
            </BasicBox>
            <BasicBox>
              <AdminArticleImageEditor
                article={article}
                file={file}
                setFile={setFile}
              />
            </BasicBox>

            <BasicBox>
              <Heading>記事タグ</Heading>
            </BasicBox>
            <BasicBox>
              <AdminArticleTagEditor
                article={article}
                updateModel={updateModel}
              />
            </BasicBox>
            <BasicBox>
              <AdminArticleTagList
                article={article}
                updateModel={updateModel}
              />
            </BasicBox>

            <BasicBox>
              <Heading>記事タイトル</Heading>
            </BasicBox>
            <BasicBox>
              <AdminArticleTitleEditor article={article} register={register} />
            </BasicBox>

            <BasicBox>
              <Heading>記事コンテンツ</Heading>
            </BasicBox>
            <BasicBox>
              <AdminArticleDescriptionEditor
                article={article}
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
