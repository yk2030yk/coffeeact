import React from 'react'

import { styled } from '@/styles'
import { useExperimentContext } from './ExperimentContext'

const Wrapper = styled.div`
  border: solid 1px #ddd;
  padding: 20px;
  margin-bottom: 20px;
`

type Props = {}

const Page: React.FC<Props> = () => {
  const { name, setName } = useExperimentContext()
  return (
    <Wrapper>
      <p>ChildComponent1-C</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </Wrapper>
  )
}

export default Page
