import React from 'react'

import * as S from './index.styled'
import DefaultTemplate from '@/components/templates/DefaultTemplate'

import { ArticleCreateForm } from '@/components/organisms/articleForm/ArticleCreateForm'

const Page: React.FC = () => (
  <DefaultTemplate>
    <S.Content>
      <S.Box>
        <ArticleCreateForm />
      </S.Box>
    </S.Content>
  </DefaultTemplate>
)

export default Page
