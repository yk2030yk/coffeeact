import React, { useState, useEffect, useCallback } from 'react'
import { startOfMonth } from 'date-fns'

import * as S from './index.styled'
//import { BasicBox, Markdown, StorageImage } from '@/components/atoms'
import DatePick from '../DatePick'
import { FilterCondition } from '@/hooks/firestore/useCoffeeArticle'
type Props = {
  setFilterCondition: (condition: FilterCondition) => void
}

const Article: React.FC<Props> = ({ setFilterCondition }) => {
  const [searchText, setSearchText] = useState<string>('')

  const today = new Date()
  const [startDate, setStartDate] = useState(startOfMonth(today))
  const [endDate, setEndDate] = useState(today)

  useEffect(() => {
    setFilterCondition({
      title: searchText,
      description: searchText,
      tags: searchText,
      between: {
        start: startDate,
        end: endDate,
      },
    })
  }, [setFilterCondition, searchText, startDate, endDate])

  return (
    <S.Wrapper>
      <DatePick
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
      <S.InputText
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="キーワードで記事を絞り込む"
      />
    </S.Wrapper>
  )
}

export default Article
