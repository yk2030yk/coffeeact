import React from 'react'
import { useHistory } from 'react-router-dom'

import * as S from './index.styled'
import { useQuery } from '@/hooks/common/useQuery'

type Props = {
  maxPage: number
  currentPage: number
}

const range = (max: number) => {
  const range = []
  for (let i = 0; i < max; i++) range.push(i + 1)
  return range
}

const Pagination: React.FC<Props> = ({ maxPage }) => {
  const query = useQuery()
  const history = useHistory()
  const pages = range(maxPage) as number[]

  const currentPage = Number(query.get('page')) || 1

  const handlePrev = () => {
    if (currentPage === 1) return
    history.push({ search: `?page=${currentPage - 1}` })
  }

  const handleNext = () => {
    if (currentPage === maxPage) return
    history.push({ search: `?page=${currentPage + 1}` })
  }

  const handleMove = (page: number) => {
    history.push({ search: `?page=${page}` })
  }

  return (
    <S.Wrapper>
      <S.PrevPage
        onClick={() => handlePrev()}
        selected={false}
        disabled={currentPage === 1}
      >
        <p>Prev</p>
      </S.PrevPage>
      {pages.map((page) => (
        <S.Page
          onClick={() => handleMove(page)}
          key={page}
          selected={page === currentPage}
          disabled={false}
        >
          <p>{page}</p>
        </S.Page>
      ))}
      <S.NextPage
        onClick={() => handleNext()}
        selected={false}
        disabled={currentPage === maxPage}
      >
        <p>Next</p>
      </S.NextPage>
    </S.Wrapper>
  )
}

export default Pagination
