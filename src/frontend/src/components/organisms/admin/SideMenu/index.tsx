import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import * as S from './index.styled'
import { TiHomeOutline, TiDocumentAdd, TiThList } from 'react-icons/ti'

const RecommendedCoffeeCards: React.FC = () => {
  const history = useHistory()
  const { pathname } = useLocation()
  return (
    <S.Menu>
      <S.MenuItem
        onClick={() => history.push('/admin/home')}
        selected={pathname === '/admin/home'}
      >
        <TiHomeOutline size={20} />
        <p>ホーム</p>
      </S.MenuItem>
      <S.MenuItem
        onClick={() => history.push('/admin/article/create')}
        selected={pathname === '/admin/article/create'}
      >
        <TiDocumentAdd size={20} />
        <p>新規記事作成</p>
      </S.MenuItem>
      <S.MenuItem
        onClick={() => history.push('/admin/articles')}
        selected={pathname === '/admin/articles'}
      >
        <TiThList size={20} />
        <p>記事一覧</p>
      </S.MenuItem>
    </S.Menu>
  )
}

export default RecommendedCoffeeCards
