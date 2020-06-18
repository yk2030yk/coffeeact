import React from 'react'

import * as S from './index.styled'
import ArticleCard from '@/components/molecules/article/user/ArticleCard'
import { Article } from '@/models/article/Article'

type Props = {
  articles: Article[]
}
const ArticleCards: React.FC<Props> = ({ articles }) => {
  return (
    <S.Cards>
      {articles.map((article) => (
        <S.Link key={article.id} to={`/article/${article.id}`}>
          <ArticleCard article={article} />
        </S.Link>
      ))}
    </S.Cards>
  )
}

export default ArticleCards
