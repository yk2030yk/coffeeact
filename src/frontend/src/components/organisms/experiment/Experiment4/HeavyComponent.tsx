import React from 'react'

import { styled } from '@/styles'

const Wrapper = styled.div`
  border: solid 1px #ddd;
  padding: 20px;
`

const List = styled.div`
  border: solid 1px #ddd;
  border-radius: 5px;
  padding: 5px;
  height: 100px;
  overflow-y: scroll;
  background-color: #f1f1f1;
`

const ListItem = styled.div`
  border-bottom: solid 1px #ddd;
  padding: 5px;
`

const listData = [...Array(5000)].map((_, i) => ({
  label: `list-item-${i}`,
}))

const Page: React.FC = () => (
  <Wrapper>
    <p>HeavyComponent</p>
    <List>
      {listData.map((item) => (
        <ListItem key={item.label}>{item.label}</ListItem>
      ))}
    </List>
  </Wrapper>
)

export default Page
