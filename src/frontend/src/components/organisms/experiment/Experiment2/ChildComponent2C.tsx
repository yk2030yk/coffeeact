import React from 'react'

import { styled } from '@/styles'
import { useAppSelector } from './store'
import { selectors } from './store/name'

const Wrapper = styled.div`
  border: solid 1px #ddd;
  padding: 20px;
  margin-bottom: 20px;
`

const Name = styled.p`
  font-size: 16px;
  color: #7fe1ff;
  font-weight: 600;
  width: 200px;
  text-decoration: underline;
`

type Props = {}

const Page: React.FC<Props> = () => {
  const name = useAppSelector(selectors.name)
  return (
    <Wrapper>
      <p>ChildComponent2-C</p>
      <Name>{`input value is "${name}"`}</Name>
    </Wrapper>
  )
}

export default Page
