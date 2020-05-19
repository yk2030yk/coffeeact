import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import * as S from './index.styled'

const OnlineInterviewFinish: React.FC = () => {
  const history = useHistory()
  const { roomName } = useParams()
  const handleClick = () => history.push(`/company/${roomName}/interview`)

  return (
    <S.Wrapper>
      <S.Title>オンライン面談</S.Title>
      <S.Text>企業名：株式会社POL様</S.Text>
      <S.Text>開催日時：2020年5月30日13:00~14:00</S.Text>
      <S.Button color="primary" variant="contained" onClick={handleClick}>
        オンライン面談に参加する
      </S.Button>
    </S.Wrapper>
  )
}

export default OnlineInterviewFinish
