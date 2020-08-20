import React from 'react'

import * as S from './styled'
import { SelectBox } from '@/components/atoms'
import { PUBLISH_STATUS, PublishStatus } from '@/models/Article'

const PublishStatusOptions = [
  {
    value: PUBLISH_STATUS.PUBLISH,
    label: '公開',
  },
  {
    value: PUBLISH_STATUS.UN_PUBLISH,
    label: '非公開',
  },
]

type Props = {
  publishStatus: PublishStatus
  handleChange: (value: string) => void
}

export const PublishStatusSelectBoxPresenter: React.FC<Props> = ({
  publishStatus,
  handleChange,
}) => (
  <S.Wrapper>
    <SelectBox
      name="publishStatus"
      defaultValue={publishStatus}
      value={publishStatus}
      onChange={handleChange}
      options={PublishStatusOptions}
    />
  </S.Wrapper>
)
