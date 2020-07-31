import React from 'react'

import * as S from './index.styled'

type Props = {
  name: string
  defaultValue?: string
  value: string
  onChange: (value: string) => void
  options: { value: string; label: string }[]
}

export const SelectBox: React.FC<Props> = ({
  name,
  defaultValue = '',
  value,
  onChange,
  options,
}) => {
  return (
    <S.Label>
      <S.SelectBox
        name={name}
        defaultValue={defaultValue}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </S.SelectBox>
    </S.Label>
  )
}
