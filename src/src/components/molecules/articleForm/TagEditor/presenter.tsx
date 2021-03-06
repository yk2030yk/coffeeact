import React from 'react'

import * as S from './styled'
import { SelectTagList } from '../SelectTagList'
import { SelectedTagList } from '../SelectedTagList'
import { BasicBox } from '@/components/atoms'

type Props = {
  defaultValue: string[]
}

export const TagEditorPresenter: React.FC<Props> = ({ defaultValue }) => {
  return (
    <S.Wrapper>
      <BasicBox>
        <SelectTagList defaultValue={defaultValue} />
        <SelectedTagList />
      </BasicBox>
    </S.Wrapper>
  )
}
