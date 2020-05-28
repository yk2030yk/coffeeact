import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
`

export const Cards = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`
