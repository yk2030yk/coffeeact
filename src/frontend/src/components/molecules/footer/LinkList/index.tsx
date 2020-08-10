import React from 'react'

import * as S from './index.styled'
import { FormattedMessage } from '@/components/atoms'
import { formatPath as formatHomePagePath } from '@/containers/routes/pageRoutes/HomePageRoute'
import { formatPath as formatAboutPagePath } from '@/containers/routes/pageRoutes/AboutPageRoute'
import { formatPath as formatProfilePagePath } from '@/containers/routes/pageRoutes/ProfilePageRoute'
import { formatPath as formatLoginPagePath } from '@/containers/routes/pageRoutes/LoginPageRoute'

const links = [
  {
    path: formatHomePagePath(),
    id: 'app.page.home',
  },
  {
    path: formatAboutPagePath(),
    id: 'app.page.about',
  },
  {
    path: formatProfilePagePath(),
    id: 'app.page.profile',
  },
  {
    path: formatLoginPagePath(),
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
