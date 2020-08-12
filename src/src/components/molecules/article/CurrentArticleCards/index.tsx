import React from 'react'

import * as S from './index.styled'
import { ArticleCard } from '../ArticleCard'
import { Article } from '@/models/Article'
import { ArticlePageRoute } from '@/components/App/Routes/pageRoutes'

type Props = {
  articles: Article[]
}

export const CurrentArticleCards: React.FC<Props> = ({ articles }) => {
  return (
    <S.Cards>
      {articles.map((article) => (
        <S.Link
          key={article.id}
          to={ArticlePageRoute.formatPath({ articleId: article.id })}
        >
          <ArticleCard article={article} />
        </S.Link>
      ))}
    </S.Cards>
  )
}
