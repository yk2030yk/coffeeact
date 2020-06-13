import React from 'react'

import * as S from './index.styled'
import {
  AppIcon,
  BasicBox,
  Heading,
  FormatMessage,
} from '@/components/atoms/common'

const AboutMessage: React.FC = () => (
  <S.Wrapper>
    <BasicBox>
      <AppIcon />
    </BasicBox>
    <BasicBox>
      <Heading>
        <FormatMessage id="about.title" />
      </Heading>
    </BasicBox>
    <BasicBox>
      <S.Text>
        CoffeeActはコーヒー好きのエンジニアが作成した個人ブログ
        <br />
        制作者の好きなCoffee + React.jsで制作されたwebサイトです
        <br />
        日々飲んでいるコーヒーやエンジニアでの活動内容を記録していきます
        <br />
        みなさんもコーヒーエンジニアライフを満喫しましょう
      </S.Text>
    </BasicBox>
  </S.Wrapper>
)

export default AboutMessage
