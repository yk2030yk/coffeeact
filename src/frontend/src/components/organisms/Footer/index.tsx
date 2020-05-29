import React from 'react'

import * as S from './index.styled'

import FooterIcon from '@/components/molecules/footer/FooterIcon'
import LinkList from '@/components/molecules/footer/LinkList'

const Footer: React.FC = () => (
  <S.Wrapper>
    <FooterIcon />
    <LinkList />
  </S.Wrapper>
)

export default Footer
