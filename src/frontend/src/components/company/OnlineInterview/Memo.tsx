import React from 'react'

import * as S from './Memo.styled'

const Memo: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Title>メモ</S.Title>
      <S.Textarea rowsMin={10} />
    </S.Wrapper>
  )
}

export default Memo
