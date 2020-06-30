import React from 'react'

import ChildComponent1C from './ChildComponent1C'
import { styled } from '@/styles'

const Wrapper = styled.div`
  border: solid 1px #ddd;
  padding: 20px;
  margin-bottom: 20px;
`

type Props = {}

const Page: React.FC<Props> = () => (
  <Wrapper>
    <p>ChildComponent1-B</p>
    <ChildComponent1C />
  </Wrapper>
)

export default Page
