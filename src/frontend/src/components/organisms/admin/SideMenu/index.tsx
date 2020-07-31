import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import * as S from './index.styled'
import {
  TiHomeOutline,
  TiDocumentAdd,
  TiThList,
  TiTags,
} from '@/components/atoms/icons'

const RecommendedCoffeeCards: React.FC = () => {
  const history = useHistory()
  const { pathname } = useLocation()
  return (
    <S.Menu>
      <S.MenuContent>
        <S.MenuTitle>ホーム</S.MenuTitle>
        <S.MenuItem
          onClick={() => history.push('/admin/home')}
          selected={pathname === '/admin/home'}
        >
          <TiHomeOutline size={20} />
          <p>ホーム</p>
        </S.MenuItem>

        <S.MenuDivider />

        <S.MenuTitle>通常記事</S.MenuTitle>
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

        <S.MenuItem
          onClick={() => history.push('/admin/tag')}
          selected={pathname === '/admin/tag'}
        >
          <TiTags size={20} />
          <p>タグ編集</p>
        </S.MenuItem>
      </S.MenuContent>
    </S.Menu>
  )
}

export default RecommendedCoffeeCards
