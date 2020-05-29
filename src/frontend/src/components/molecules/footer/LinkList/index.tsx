import React from 'react'
import { FormattedMessage } from 'react-intl'
import * as S from './index.styled'
import { Link } from '@/components/atoms'

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
    path: '/contact',
    id: 'app.page.contact',
  },
  {
    path: '/help',
    id: 'app.page.help',
  },
]

const LinkList: React.FC = () => (
  <S.Wrapper>
    {links.map(({ path, id }) => (
      <S.Item key={id}>
        <Link path={path}>
          <FormattedMessage id={id} />
        </Link>
      </S.Item>
    ))}
  </S.Wrapper>
)

export default LinkList
