import React from 'react'

import * as S from './index.styled'
import AdminCoffeeArticleCard from '@/components/molecules/article/AdminCoffeeArticleCard'
import { CoffeeArticle } from '@/models/article/CoffeeArticle'

type Props = {
  coffeeArticles: CoffeeArticle[]
}
const CoffeeArticleCards: React.FC<Props> = ({ coffeeArticles }) => {
  return (
    <S.Cards>
      {coffeeArticles.map((coffeeArticle) => (
        <S.Link
          key={coffeeArticle.id}
          to={`/admin/article/${coffeeArticle.id}`}
        >
          <AdminCoffeeArticleCard coffeeArticle={coffeeArticle} />
        </S.Link>
      ))}
    </S.Cards>
  )
}

export default CoffeeArticleCards
