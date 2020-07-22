import React from 'react'

import * as S from './index.styled'
import HomeTemplate from '@/components/templates/HomeTemplate'
import { CurrentArticleListBox } from '@/components/organisms/article/CurrentArticleListBox'
import { useArticles } from '@/recoil/article/hooks'

const Page: React.FC = () => {
  useArticles()
  return (
    <HomeTemplate>
      <S.Wrapper>
        <CurrentArticleListBox />
      </S.Wrapper>
    </HomeTemplate>
  )
}

export default Page
