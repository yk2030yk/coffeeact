import React from 'react'
import { FormattedMessage } from 'react-intl'

import * as S from './index.styled'

const Profile: React.FC = () => (
  <S.WriterName>
    <FormattedMessage id="profile.writerName" />
  </S.WriterName>
)

export default Profile
