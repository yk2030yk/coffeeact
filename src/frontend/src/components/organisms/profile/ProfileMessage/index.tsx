import React from 'react'

import * as S from './index.styled'
import Heading from '@/components/atoms/article/Heading'
import ProfileIcon from '@/components/molecules/profile/ProfileIcon'
import ProfileTable from '@/components/molecules/profile/ProfileTable'
import WriterName from '@/components/molecules/profile/WriterName'
import BasicBox from '@/components/atoms/common/BasicBox'

const Profile: React.FC = () => (
  <S.Wrapper>
    <BasicBox>
      <ProfileIcon />
    </BasicBox>
    <BasicBox>
      <Heading id="profile.title" />
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
