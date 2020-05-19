import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 160px 400px;
  border: solid 1px #ddd;
  border-radius: 5px;
  display: grid;
  grid-template-areas:
    'head'
    'video';
`

export const HeaderContent = styled.div`
  grid-area: head;
  padding: 20px;
  background-color: #eee;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const VideoContent = styled.div`
  grid-area: video;
  padding: 20px;
`
