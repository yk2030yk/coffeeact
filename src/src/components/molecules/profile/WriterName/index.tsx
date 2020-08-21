import React from 'react'

import * as S from './styled'
import { FormattedMessage } from '@/components/atoms'

const Profile: React.FC = () => (
  <S.WriterName>
    <FormattedMessage id="profile.writerName" />
  </S.WriterName>
)

export default Profile
