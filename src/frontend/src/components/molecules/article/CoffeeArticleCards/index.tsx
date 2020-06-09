import React from 'react'

import * as S from './index.styled'
import CoffeeArticleCard from '@/components/molecules/article/CoffeeArticleCard'
import { CoffeeArticle } from '@/models/article/CoffeeArticle'

type Props = {
  coffeeArticles: CoffeeArticle[]
}
const CoffeeArticleCards: React.FC<Props> = ({ coffeeArticles }) => {
  return (
    <S.Cards>
      {coffeeArticles.map((coffeeArticle) => (
        <S.Link key={coffeeArticle.id} to={`/article/${coffeeArticle.id}`}>
          <CoffeeArticleCard coffeeArticle={coffeeArticle} />
        </S.Link>
      ))}
    </S.Cards>
  )
}

export default CoffeeArticleCards
