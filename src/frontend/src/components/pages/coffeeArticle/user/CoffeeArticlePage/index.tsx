import React from 'react'
import { useParams } from 'react-router-dom'

import * as S from './index.styled'
import DefaultTemplate from '@/components/templates/DefaultTemplate'
import CoffeeArticleContent from '@/components/molecules/coffeeArticle/user/CoffeeArticleContent'
import { useCoffeeArticle } from '@/hooks/firestore/useCoffeeArticle'

const Page: React.FC = () => {
  const { articleId } = useParams()
  const { coffeeArticle } = useCoffeeArticle(articleId)
  return (
    <DefaultTemplate>
      <S.Wrapper>
        {coffeeArticle && (
          <CoffeeArticleContent coffeeArticle={coffeeArticle} />
        )}
      </S.Wrapper>
    </DefaultTemplate>
  )
}

export default Page
