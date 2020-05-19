import styled from 'styled-components'
import { CircularProgress } from '@material-ui/core'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(200, 200, 200, 0.4);
  z-index: 10;
`

export const Progress = styled(CircularProgress)``
