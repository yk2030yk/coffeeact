import React from 'react'
import { Loadable } from 'recoil'

import * as S from './index.styled'
import { ArticleForm } from '../ArticleForm'
import { UpdateButton } from '@/components/molecules/articleForm/UpdateButton'
import { DeleteButton } from '@/components/molecules/articleForm/DeleteButton'
import { Article } from '@/models'

type Props = {
  articleId: string
  loadable: Loadable<Article>
}

export const ArticleEditFormPresenter: React.FC<Props> = ({
  articleId,
  loadable,
}) => {
  switch (loadable.state) {
    case 'hasValue':
      return (
        <ArticleForm
          article={loadable.contents}
          ActionButton={
            <S.ButtonArea>
              <UpdateButton articleId={articleId} />
              <DeleteButton articleId={articleId} />
            </S.ButtonArea>
          }
        />
      )
    case 'loading':
      return null
    case 'hasError':
      return null
    default:
      return null
  }
}
