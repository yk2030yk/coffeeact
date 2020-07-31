import React from 'react'

import ChildComponent2C from './ChildComponent2C'
import HeavyComponent from './HeavyComponent'
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
    <p>ChildComponent2-B</p>
    <ChildComponent2C name={name} />
    <HeavyComponent />
  </Wrapper>
)

export default Page
