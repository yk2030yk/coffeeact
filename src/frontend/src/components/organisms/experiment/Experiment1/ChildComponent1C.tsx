import React from 'react'

import { styled } from '@/styles'

const Wrapper = styled.div`
  border: solid 1px #ddd;
  padding: 20px;
  margin-bottom: 20px;
`

type Props = {
  name: string
  setName: React.Dispatch<React.SetStateAction<string>>
}

const Page: React.FC<Props> = ({ name, setName }) => (
  <Wrapper>
    <p>ChildComponent1-C</p>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  </Wrapper>
)

export default Page
