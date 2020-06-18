import { styled, theme } from '@/styles'
import { Input } from '@/components/atoms'

export const Wrapper = styled.div`
  background-color: ${theme.color.white};
  border: solid 1px ${theme.color.argent};
  padding: ${theme.space.atom};
  display: flex;
`

export const InputText = styled(Input)`
  width: 300px;
  margin-left: ${theme.space.atom};
`
