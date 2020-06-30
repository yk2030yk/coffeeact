import React from 'react'

import ChildComponent1B from './ChildComponent1B'
import { styled } from '@/styles'

const Wrapper = styled.div`
  border: solid 1px #ddd;
  padding: 20px;
  margin-bottom: 20px;
`

type Props = {}

const Page: React.FC<Props> = () => (
  <Wrapper>
    <p>ChildComponent1-A</p>
    <ChildComponent1B />
  </Wrapper>
)

export default Page
