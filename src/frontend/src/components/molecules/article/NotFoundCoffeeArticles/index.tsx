import React, { useState } from 'react'
import DateFnsUtils from '@date-io/date-fns'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'

import * as S from './index.styled'

const common = {
  format: 'yyyy/MM/dd',
  autoOk: true,
}

type Props = {
  startDate: Date
  setStartDate: (d: Date) => void
  endDate: Date
  setEndDate: (d: Date) => void
}

const DatePick: React.FC<Props> = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <S.Wrapper>
      <S.Box>
        <S.Label>開始時間</S.Label>
        <DatePicker
          value={startDate}
          onChange={(value: any) => setStartDate(value)}
          {...common}
        />
      </S.Box>
      <S.Box>
        <S.Label>終了時間</S.Label>
        <DatePicker
          value={endDate}
          onChange={(value: any) => setEndDate(value)}
          {...common}
        />
      </S.Box>
    </S.Wrapper>
  </MuiPickersUtilsProvider>
)

export default DatePick
