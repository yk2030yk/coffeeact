import React from 'react'

import ChildComponent2B from './ChildComponent2B'
import { styled } from '@/styles'

const Wrapper = styled.div`
  border: solid 1px #ddd;
  padding: 20px;
  margin-bottom: 20px;
`

type Props = {
  name: string
}

const Page: React.FC<Props> = ({ name }) => (
  <Wrapper>
    <p>ChildComponent2-A</p>
    <ChildComponent2B name={name} />
  </Wrapper>
)

export default Page
