import React from 'react'

import * as S from './index.styled'
import AdminArticleCard from '@/components/molecules/article/admin/AdminArticleCard'
import { Article } from '@/models/article/Article'

type Props = {
  articles: Article[]
}
const ArticleCards: React.FC<Props> = ({ articles }) => {
  return (
    <S.Cards>
      {articles.map((article) => (
        <S.Link key={article.id} to={`/admin/article/${article.id}`}>
          <AdminArticleCard article={article} />
        </S.Link>
      ))}
    </S.Cards>
  )
}

export default ArticleCards
