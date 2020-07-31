import { styled } from '@/styles'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 300px 300px 1fr;
  grid-template-rows: 150px 1fr;
  grid-gap: 20px;
  grid-template-areas:
    'a b c'
    'd e e';
`

export const DummyCard = styled.div`
  width: 100%;
  height: 100%;
  border: solid 1px #ddd;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
`

export const GraphCard = styled(DummyCard)`
  grid-area: e;
`
