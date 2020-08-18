import React from 'react'

import * as S from './index.styled'
import {
  AppIcon,
  BasicBox,
  Heading,
  FormattedMessage,
} from '@/components/atoms'
import { AboutMessage } from '@/components/molecules/about/AboutMessage'

export const AboutMessageBoxPresenter: React.FC = () => (
  <S.Wrapper>
    <BasicBox>
      <AppIcon />
    </BasicBox>
    <BasicBox>
      <Heading>
        <FormattedMessage id="about.title" />
      </Heading>
    </BasicBox>
    <BasicBox>
      <AboutMessage />
    </BasicBox>
  </S.Wrapper>
)
