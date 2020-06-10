import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { theme } from '@/styles'
import * as S from './index.styled'

const RecommendedCoffeeCards: React.FC = () => {
  return (
    <S.Wrapper>
      <CircularProgress />
    </S.Wrapper>
  )
}

export default RecommendedCoffeeCards
