import { styled } from '@/styles'
import * as TableAtom from '@/components/atoms/Table'

export const Wrapper = styled.div``

export const Table = styled(TableAtom.Table)`
  border: none;
`

export const Row = styled(TableAtom.Row)``

export const TitleCell = styled(TableAtom.Cell)`
  width: 200px;
`

export const PvCell = styled(TableAtom.Cell)`
  width: 50px;
`
