import React from 'react'

import * as S from './index.styled'
import AppIcon from '@/components/atoms/common/AppIcon'
import Heading from '@/components/atoms/article/Heading'

const AboutMessage: React.FC = () => (
  <S.Wrapper>
    <AppIcon />
    <Heading id="about.title" />
    <S.TextBox>
      <S.Text>
        CoffeeActはコーヒー好きのエンジニアが作成した個人ブログ
        <br />
        制作者の好きなCoffee + React.jsで制作されたwebサイトです
        <br />
        日々飲んでいるコーヒーやエンジニアでの活動内容を記録していきます
        <br />
        みなさんもコーヒーエンジニアライフを満喫しましょう
      </S.Text>
    </S.TextBox>
  </S.Wrapper>
)

export default AboutMessage
