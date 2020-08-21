import React from 'react'

import * as S from './styled'
import { ArticleCard } from '../ArticleCard'
import { Article } from '@/models'
import { ArticlePageRoute } from '@/components/App/Routes/pageRoutes'

type Props = {
  articles: Article[]
}

export const CurrentArticleCardsPresenter: React.FC<Props> = ({ articles }) => {
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
