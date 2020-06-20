import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import * as S from './index.styled'
import { FormValues, formValuesToModel } from './form'
import { BasicBox, Button, SubmitButton, Heading } from '@/components/atoms'
import {
  AdminArticleImage,
  AdminArticleTitleEditor,
  AdminArticleDescriptionEditor,
  AdminArticleTagEditor,
  AdminArticleTagList,
  AdminArticleImageCropperModal,
} from '@/components/molecules/article/admin'
import { Article } from '@/models/article/Article'
import { useUploadImage } from '@/hooks/storage/useUploadImage'
import { useModal } from '@/hooks/common/useModal'
import { useArticle } from '@/hooks/firestore/useArticle'
import { randomString } from '@/utils/util'

type Props = {
  articleId?: string
  handleSubmit: (data: Article) => Promise<void>
}

const AdminArticleForm: React.FC<Props> = ({ articleId, handleSubmit }) => {
  const { article, updateModel } = useArticle(articleId)
  const { upload, setBlob, src } = useUploadImage()
  const { register, handleSubmit: handleSubmitHookForm } = useForm<FormValues>()
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const modal = useModal()

  const onSubmit = handleSubmitHookForm(async (data) => {
    setIsSubmitting(true)
    const newArticle = formValuesToModel(data, article)
    const path = `public/${randomString()}.png`
    upload(path)
    newArticle.imgSrc = path
    await handleSubmit(newArticle)
    setIsSubmitting(false)
  })

  return (
    <S.Wrapper>
      {article && (
        <>
          <AdminArticleImageCropperModal modal={modal} handleFinish={setBlob} />
          <form onSubmit={onSubmit}>
            <BasicBox>
              <Button onClick={() => modal.open()}>画像を選ぶ</Button>
            </BasicBox>
            <BasicBox>
              <AdminArticleImage src={src} path={article.imgSrc} />
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

            <BasicBox>{isSubmitting && <p>saving...</p>}</BasicBox>

            <BasicBox>
              <SubmitButton
                type="submit"
                value="保存する"
                disabled={isSubmitting}
              />
            </BasicBox>
          </form>
        </>
      )}
    </S.Wrapper>
  )
}

export default AdminArticleForm
