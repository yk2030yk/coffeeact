import React from 'react'

import profileImageSrc from '@/assets/images/profile-icon.gif'

import * as S from './styled'

const ProfileIcon: React.FC = () => (
  <S.Wrapper>
    <S.Img src={profileImageSrc} />
  </S.Wrapper>
)

export default ProfileIcon
