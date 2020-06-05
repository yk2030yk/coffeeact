import React from 'react'

import * as S from './index.styled'
import Heading from '@/components/atoms/article/Heading'
import ProfileIcon from '@/components/molecules/contact/ProfileIcon'
import ProfileTable from '@/components/molecules/contact/ProfileTable'
import WriterName from '@/components/molecules/contact/WriterName'

const Profile: React.FC = () => (
  <S.Wrapper>
    <ProfileIcon />
    <Heading id="contact.profile.title" />
    <WriterName />
    <ProfileTable />
  </S.Wrapper>
)

export default Profile
