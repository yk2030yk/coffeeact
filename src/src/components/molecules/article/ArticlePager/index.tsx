import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'

import * as S from './index.styled'
import { pagerSelector, pageState } from '@/recoil/articlePaging'

export const ArticlePager: React.FC = () => {
  const pager = useRecoilValue(pagerSelector)
  const setPage = useSetRecoilState(pageState)

  const handleClick = (number: number) => setPage(number)

  return (
    <S.Wrapper>
      <S.PagerBox>
        {pager.map(({ number, isSelected }) => (
          <S.Page
            key={`page-${number}`}
            onClick={() => handleClick(number)}
            isSelected={isSelected}
          >
            {number}
          </S.Page>
        ))}
      </S.PagerBox>
    </S.Wrapper>
  )
}
