import React from 'react'

import * as S from './styled'
import { useArticlePvRanking } from '@/hooks/useArticlePvRanking'

export const ArticlePvSummary: React.FC = () => {
  const { articles, articlePvList } = useArticlePvRanking()
  return (
    <S.Wrapper>
      <S.Table>
        {articles.map((article) => {
          const articlePv = articlePvList.find(
            (articlePv) => articlePv.id === article.id
          )
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
}
