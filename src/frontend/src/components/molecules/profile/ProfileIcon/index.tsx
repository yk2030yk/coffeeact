import React from 'react'

import profileImageSrc from '@/assets/images/profile.png'

import * as S from './index.styled'

const ProfileIcon: React.FC = () => (
  <S.Wrapper>
    <S.Img src={profileImageSrc} />
  </S.Wrapper>
)

export default ProfileIcon
