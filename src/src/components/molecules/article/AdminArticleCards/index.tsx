import React from 'react'

import * as S from './styled'
import { AdminArticleCard } from '../AdminArticleCard'
import { Article } from '@/models'
import { AdminArticleEditorPageRoute } from '@/components/App/Routes/pageRoutes'

type Props = {
  articles: Article[]
}

export const AdminArticleCards: React.FC<Props> = ({ articles }) => {
  return (
    <S.Cards>
      {articles.map((article) => (
        <S.Link
          key={article.id}
          to={AdminArticleEditorPageRoute.formatPath({ articleId: article.id })}
        >
          <AdminArticleCard article={article} />
        </S.Link>
      ))}
    </S.Cards>
  )
}
