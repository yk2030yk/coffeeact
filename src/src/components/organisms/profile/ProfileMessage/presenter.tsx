import React from 'react'

import * as S from './index.styled'
import { Heading, FormattedMessage, BasicBox } from '@/components/atoms'
import ProfileIcon from '@/components/molecules/profile/ProfileIcon'
import ProfileTable from '@/components/molecules/profile/ProfileTable'
import WriterName from '@/components/molecules/profile/WriterName'

export const ProfileMessagePresenter: React.FC = () => (
  <S.Wrapper>
    <BasicBox>
      <ProfileIcon />
    </BasicBox>
    <BasicBox>
      <Heading>
        <FormattedMessage id="profile.title" />
      </Heading>
    </BasicBox>
    <BasicBox>
      <WriterName />
    </BasicBox>
    <BasicBox>
      <ProfileTable />
    </BasicBox>
  </S.Wrapper>
)
