import React from 'react'
import { useParams } from 'react-router-dom'

import * as S from './index.styled'
import { LoadingPlaceholder } from '@/components/atoms'
import { CoffeeArticleContent } from '@/components/molecules/coffeeArticle/user'
import { useCoffeeArticle } from '@/hooks/firestore/useCoffeeArticle'

const Page: React.FC = () => {
  const { articleId } = useParams()
  const { coffeeArticle, isLoading } = useCoffeeArticle(articleId)

  return (
    <S.Wrapper>
      {isLoading && <LoadingPlaceholder />}
      {coffeeArticle && <CoffeeArticleContent coffeeArticle={coffeeArticle} />}
    </S.Wrapper>
  )
}

export default Page
