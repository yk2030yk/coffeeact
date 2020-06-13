import React from 'react'

import * as S from './index.styled'
import { Heading, FormatMessage, BasicBox } from '@/components/atoms/common'
import ProfileIcon from '@/components/molecules/profile/ProfileIcon'
import ProfileTable from '@/components/molecules/profile/ProfileTable'
import WriterName from '@/components/molecules/profile/WriterName'

const Profile: React.FC = () => (
  <S.Wrapper>
    <BasicBox>
      <ProfileIcon />
    </BasicBox>
    <BasicBox>
      <Heading>
        <FormatMessage id="profile.title" />
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

export default Profile
