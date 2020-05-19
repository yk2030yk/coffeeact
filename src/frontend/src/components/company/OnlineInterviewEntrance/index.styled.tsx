import styled from 'styled-components'
import { Button as MUButton } from '@material-ui/core'
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
`

export const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
`

export const Text = styled.div`
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
`

export const Button = styled(MUButton)``
