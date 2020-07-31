import React, { useState } from 'react'

import ChildComponent1A from './ChildComponent1A'
import ChildComponent2A from './ChildComponent2A'
import { styled } from '@/styles'

const Wrapper = styled.div`
  border: solid 1px #ddd;
  padding: 20px;
  background-color: #fff;
  width: 1000px;

  p {
    margin-bottom: 20px;
    font-weight: 600;
  }
`

const Components = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`

const Page: React.FC = () => {
  const [name, setName] = useState<string>('')
  return (
    <Wrapper>
      <p>ParentComponent</p>
      <Components>
        <ChildComponent1A name={name} setName={setName} />
        <ChildComponent2A name={name} />
      </Components>
    </Wrapper>
  )
}

export default Page
