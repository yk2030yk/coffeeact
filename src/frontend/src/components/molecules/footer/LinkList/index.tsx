import React from 'react'
import { FormattedMessage } from 'react-intl'

import * as S from './index.styled'

const links = [
  {
    path: '/',
    id: 'app.page.home',
  },
  {
    path: '/about',
    id: 'app.page.about',
  },
  {
    path: '/profile',
    id: 'app.page.profile',
  },
  {
    path: '/admin/login',
    id: 'app.page.admin.login',
  },
]

const LinkList: React.FC = () => (
  <S.Wrapper>
    {links.map(({ path, id }) => (
      <S.Item key={id}>
        <S.LinkText to={path}>
          <FormattedMessage id={id} />
        </S.LinkText>
      </S.Item>
    ))}
  </S.Wrapper>
)

export default LinkList
