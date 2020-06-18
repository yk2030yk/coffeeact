import React, { useState } from 'react'

import * as S from './index.styled'
import { BasicBox } from '@/components/atoms'
import { AdminArticleCards } from '@/components/molecules/article/admin'
import { useArticles, useArticlesFilter } from '@/hooks/firestore/useArticle'

const Page: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('')
  const { articles } = useArticles()
  const filter = useArticlesFilter(articles)

  const filtered = filter({
    title: searchText,
    description: searchText,
    tags: searchText,
  })

  return (
    <S.Wrapper>
      <BasicBox>
        <S.InputText
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="記事を絞り込む"
        />
      </BasicBox>
      <BasicBox>
        <AdminArticleCards articles={filtered} />
      </BasicBox>
    </S.Wrapper>
  )
}

export default Page
