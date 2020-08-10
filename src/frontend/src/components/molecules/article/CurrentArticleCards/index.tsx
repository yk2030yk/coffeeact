import React from 'react'

import * as S from './index.styled'
import { ArticleCard } from '../ArticleCard'
import { Article } from '@/models/Article'
import { formatPath } from '@/containers/routes/pageRoutes/ArticlePageRoute'

type Props = {
  articles: Article[]
}

export const CurrentArticleCards: React.FC<Props> = ({ articles }) => {
  return (
    <S.Cards>
      {articles.map((article) => (
        <S.Link key={article.id} to={formatPath({ articleId: article.id })}>
          <ArticleCard article={article} />
        </S.Link>
      ))}
    </S.Cards>
  )
}
