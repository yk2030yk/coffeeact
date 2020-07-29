import React, { useState, useEffect } from 'react'

import * as S from './index.styled'
import { Heading, FormattedMessage, BasicBox } from '@/components/atoms'
import { ArticlePvRankingCards } from '@/components/molecules/article'
import { articlePVService } from '@/service/firestore/ArticlePVService'
import { articleService } from '@/service/firestore/ArticleService'
import { Article } from '@/models/article/Article'

export const ArticlePvRanking: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {
    const fetch = async () => {
      const ids = await articlePVService.getTopPvIdList(3)
      const list = await articleService.getListByIds(ids)
      setArticles(list)
    }
    fetch()
  }, [])

  return (
    <S.Wrapper>
      <BasicBox>
        <Heading>
          <FormattedMessage id="home.ranking.title" />
        </Heading>
      </BasicBox>
      <BasicBox>
        <ArticlePvRankingCards articles={articles} />
      </BasicBox>
    </S.Wrapper>
  )
}
