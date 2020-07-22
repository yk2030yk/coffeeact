import React, { useEffect } from 'react'
import { useRecoilState, useResetRecoilState } from 'recoil'

import * as S from './index.styled'
import { articlesFilterState } from '@/recoil/article/atoms'

export const ArticleCardsFilter: React.FC = () => {
  const [filter, setFilter] = useRecoilState(articlesFilterState)
  const resetFilter = useResetRecoilState(articlesFilterState)

  useEffect(() => {
    return () => resetFilter()
  }, [resetFilter])

  return (
    <S.Wrapper>
      <S.InputText
        type="text"
        value={filter.keyword}
        onChange={(e) =>
          setFilter((old) => ({ ...old, keyword: e.target.value }))
        }
        placeholder="キーワードで記事を絞り込む"
      />
    </S.Wrapper>
  )
}
