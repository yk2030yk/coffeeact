import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import * as S from './index.styled'

const Entrance: React.FC = () => {
  const history = useHistory()
  const { roomName } = useParams()
  const handleClick = () => history.push(`/student/${roomName}/interview`)

  return (
    <S.Wrapper>
      <S.Title>オンライン面談</S.Title>
      <S.Text>参加者：田村稜1856</S.Text>
      <S.Text>開催日時：2020年5月30日13:00~14:00</S.Text>
      <S.Button color="primary" variant="contained" onClick={handleClick}>
        オンライン面談に参加する
      </S.Button>
    </S.Wrapper>
  )
}

export default Entrance
