import React from 'react'
import { useRecoilState } from 'recoil'

import { styled } from '@/styles'
import { nameState } from './recoil/name'

const Wrapper = styled.div`
  border: solid 1px #ddd;
  padding: 20px;
  margin-bottom: 20px;
`

type Props = {}

const Page: React.FC<Props> = () => {
  const [name, setName] = useRecoilState(nameState)
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
