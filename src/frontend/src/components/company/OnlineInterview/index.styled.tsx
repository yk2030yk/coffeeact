import styled from 'styled-components'
import { Card } from '@material-ui/core'

export const Wrapper = styled(Card)`
  margin: 0 40px;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(600px, 1fr) 400px;
  grid-template-areas:
    'head head'
    'video student'
    'memo student';
`

export const HeaderContent = styled.div`
  grid-area: head;
  padding: 20px;
  background-color: #ced5e8;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const VideoContent = styled.div`
  grid-area: video;
  padding: 20px;
`

export const MemoContent = styled.div`
  grid-area: memo;
  padding: 20px;
`

export const StudentContent = styled.div`
  grid-area: student;
  padding: 20px;
`
