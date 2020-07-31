import React from 'react'

import * as S from './index.styled'
import { Table, Row, Cell } from '@/components/atoms/Table'

type Props = {}

export const ArticleSummary: React.FC<Props> = () => {
  return (
    <S.Wrapper>
      <Table>
        <Row>
          <Cell>記事数</Cell>
          <Cell>３</Cell>
        </Row>
      </Table>
    </S.Wrapper>
  )
}
