import React from 'react'

import { styled } from '@/styles'
import { useAppDispatch, useAppSelector } from './store'
import { actions, selectors } from './store/name'

const Wrapper = styled.div`
  border: solid 1px #ddd;
  padding: 20px;
  margin-bottom: 20px;
`

type Props = {}

const Page: React.FC<Props> = () => {
  const name = useAppSelector(selectors.name)
  const dispatch = useAppDispatch()
  return (
    <Wrapper>
      <p>ChildComponent1-C</p>
      <input
        type="text"
        value={name}
        onChange={(e) => dispatch(actions.setName(e.target.value))}
      />
    </Wrapper>
  )
}

export default Page
