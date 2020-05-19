import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 40px;
  border: solid 1px #ddd;
  border-radius: 5px;
  display: grid;
  grid-template-columns: minmax(600px, 1fr) 400px;
  grid-template-areas:
    'head head'
    'video student'
    'memo student';
`
