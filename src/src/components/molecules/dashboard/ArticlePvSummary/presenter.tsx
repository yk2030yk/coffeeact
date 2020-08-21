import React from 'react'

import * as S from './styled'
import { Article } from '@/models'

type Props = {
  articles: Article[]
  articlePvList: {
    // FIXME to model
    id: string
    pv: number
  }[]
}

export const ArticlePvSummaryPresenter: React.FC<Props> = ({
  articles,
  articlePvList,
}) => (
  <S.Wrapper>
    <S.Table>
      {articles.map((article) => {
        const articlePv = articlePvList.find((ap) => ap.id === article.id)
        return (
          <S.Row key={article.id}>
            <S.TitleCell>{article.title}</S.TitleCell>
            <S.PvCell>{articlePv ? articlePv.pv : 0}</S.PvCell>
          </S.Row>
        )
      })}
    </S.Table>
  </S.Wrapper>
)
