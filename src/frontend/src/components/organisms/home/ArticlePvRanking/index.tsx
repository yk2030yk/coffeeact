import React, { useState, useEffect } from 'react'
import { FaChessKing } from '@/components/atoms/icons'

import * as S from './index.styled'
import { BasicBox } from '@/components/atoms'
import { ArticlePvRankingCards } from '@/components/molecules/article'
import { SideContentTitle } from '@/components/molecules/home/SideContentTitle'
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
        <SideContentTitle
          IconComponent={<FaChessKing size={20} color={'#e6b422'} />}
          id="home.ranking.title"
        />
      </BasicBox>
      <BasicBox>
        <ArticlePvRankingCards articles={articles} />
      </BasicBox>
    </S.Wrapper>
  )
}
