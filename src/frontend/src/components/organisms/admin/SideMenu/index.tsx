import React from 'react'
import { useHistory } from 'react-router-dom'
import * as S from './index.styled'
import { TiHomeOutline, TiDocumentAdd, TiThList } from 'react-icons/ti'

const RecommendedCoffeeCards: React.FC = () => {
  const history = useHistory()
  return (
    <S.Menu>
      <S.MenuItem onClick={() => history.push('/admin/home')}>
        <TiHomeOutline size={20} />
        <p>ホーム</p>
      </S.MenuItem>
      <S.MenuItem onClick={() => history.push('/admin/article/create')}>
        <TiDocumentAdd size={20} />
        <p>新規記事作成</p>
      </S.MenuItem>
      <S.MenuItem onClick={() => history.push('/admin/articles')}>
        <TiThList size={20} />
        <p>記事一覧</p>
      </S.MenuItem>
    </S.Menu>
  )
}

export default RecommendedCoffeeCards
