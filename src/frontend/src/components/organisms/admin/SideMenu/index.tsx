import React from 'react'
import { useHistory } from 'react-router-dom'
import * as S from './index.styled'

const RecommendedCoffeeCards: React.FC = () => {
  const history = useHistory()
  return (
    <S.Menu>
      <S.MenuItem onClick={() => history.push('/admin/articles')}>
        記事一覧
      </S.MenuItem>
    </S.Menu>
  )
}

export default RecommendedCoffeeCards
