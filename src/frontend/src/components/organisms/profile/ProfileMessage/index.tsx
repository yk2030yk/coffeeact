import React from 'react'

import * as S from './index.styled'
import Heading from '@/components/atoms/article/Heading'
import ProfileIcon from '@/components/molecules/profile/ProfileIcon'
import ProfileTable from '@/components/molecules/profile/ProfileTable'
import WriterName from '@/components/molecules/profile/WriterName'

const Profile: React.FC = () => (
  <S.Wrapper>
    <ProfileIcon />
    <Heading id="profile.title" />
    <WriterName />
    <ProfileTable />
  </S.Wrapper>
)

export default Profile
