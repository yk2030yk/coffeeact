import styled from 'styled-components'
import { TextareaAutosize } from '@material-ui/core'

export const Wrapper = styled.div``

export const Title = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
`

export const Textarea = styled(TextareaAutosize)`
  border: solid 1px #999;
  width: 100%;
  border-radius: 5px;
  padding: 5px;
  resize: none;
`
