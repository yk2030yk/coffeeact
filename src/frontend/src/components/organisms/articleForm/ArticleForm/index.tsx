import React, { ReactNode } from 'react'

import { BasicBox, Heading2 } from '@/components/atoms'
import { TitleEditor } from '@/components/molecules/articleForm/TitleEditor'
import { ImageSrcBox } from '@/components/molecules/articleForm/ImageSrcBox'
import { DescriptionEditor } from '@/components/molecules/articleForm/DescriptionEditor'
import { TagsEditor } from '@/components/molecules/articleForm/TagsEditor'
import { TagsList } from '@/components/molecules/articleForm/TagsList'
import { PublishStatusSelectBox } from '@/components/molecules/articleForm/PublishStatusSelectBox'
import { Article } from '@/models/article/Article'

type Props = {
  article?: Article
  ActionButton: ReactNode
}

export const ArticleForm: React.FC<Props> = ({
  article = new Article(),
  ActionButton,
}) => {
  return (
    <>
      <BasicBox>
        <Heading2>見出し画像</Heading2>
      </BasicBox>
      <BasicBox>
        <ImageSrcBox defaultValue={article.imgSrc} />
      </BasicBox>

      <BasicBox>
        <Heading2>タイトル</Heading2>
      </BasicBox>
      <BasicBox>
        <TitleEditor defaultValue={article.title} />
      </BasicBox>

      <BasicBox>
        <Heading2>本文</Heading2>
      </BasicBox>
      <BasicBox>
        <DescriptionEditor defaultValue={article.description} />
      </BasicBox>

      <BasicBox>
        <Heading2>タグ</Heading2>
      </BasicBox>
      <BasicBox>
        <TagsEditor defaultValue={article.tags} />
      </BasicBox>
      <BasicBox>
        <TagsList />
      </BasicBox>

      <BasicBox>
        <Heading2>公開設定</Heading2>
      </BasicBox>
      <BasicBox>
        <PublishStatusSelectBox defaultValue={article.publishStatus} />
      </BasicBox>

      <BasicBox>{ActionButton}</BasicBox>
    </>
  )
}
