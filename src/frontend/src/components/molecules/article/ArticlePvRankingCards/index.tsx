import React from 'react'

import * as S from './index.styled'
import { ArticlePvRankingCard } from '@/components/molecules/article'
import { Article } from '@/models/Article'
import { formatPath } from '@/containers/routes/pageRoutes/ArticlePageRoute'

type Props = {
  articles: Article[]
}

export const ArticlePvRankingCards: React.FC<Props> = ({ articles }) => {
  return (
    <S.Wrapper>
      {articles.map((article, i) => (
        <S.Link key={article.id} to={formatPath({ articleId: article.id })}>
          <ArticlePvRankingCard rank={i + 1} article={article} />
        </S.Link>
      ))}
    </S.Wrapper>
  )
}
