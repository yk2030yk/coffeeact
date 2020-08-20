import React from 'react'
import * as S from './styled'

type Props = {
  pager: {
    number: number
    isSelected: boolean
  }[]
  handleClickPageNumber: (number: number) => void
}

export const ArticlePagerPresenter: React.FC<Props> = ({
  pager,
  handleClickPageNumber,
}) => {
  return (
    <S.Wrapper>
      <S.PagerBox>
        {pager.map(({ number, isSelected }) => (
          <S.Page
            key={`page-${number}`}
            onClick={() => handleClickPageNumber(number)}
            isSelected={isSelected}
          >
            {number}
          </S.Page>
        ))}
      </S.PagerBox>
    </S.Wrapper>
  )
}
