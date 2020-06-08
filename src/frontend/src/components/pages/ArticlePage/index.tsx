import React from 'react'

import * as S from './index.styled'
import DefaultTemplate from '../../templates/DefaultTemplate'
import CoffeeArticleContent from '@/components/molecules/article/CoffeeArticleContent'
import { CoffeeArticle } from '@/models/article/CoffeeArticle'

const Page: React.FC = () => {
  return (
    <DefaultTemplate>
      <S.Wrapper>
        <CoffeeArticleContent
          coffeeArticle={
            new CoffeeArticle({
              id: '1',
              imgSrc: 'https://i.picsum.photos/id/0/5616/3744.jpg',
              title: '南蛮屋Coffee',
              description: '溝の口駅の近くに点在する珈琲豆専門店。',
              updatedAt: '2020-05-11 20:30:11',
            })
          }
        />
      </S.Wrapper>
    </DefaultTemplate>
  )
}

export default Page
