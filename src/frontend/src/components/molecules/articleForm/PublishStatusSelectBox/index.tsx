import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'

import * as S from './index.styled'
import { SelectBox, Option } from '@/components/atoms'
import { PUBLISH_STATUS, PublishStatus } from '@/models/article/Article'
import { publishStatusState } from '@/recoil/articleForm/atom'

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
  defaultValue?: PublishStatus
}

export const PublishStatusSelectBox: React.FC<Props> = ({
  defaultValue = PUBLISH_STATUS.UN_PUBLISH,
}) => {
  const [publishStatus, setPublishStatus] = useRecoilState(publishStatusState)

  useEffect(() => {
    if (!defaultValue) return
    setPublishStatus(defaultValue)
  }, [defaultValue, setPublishStatus])

  return (
    <S.Wrapper>
      <SelectBox
        name="publishStatus"
        defaultValue={publishStatus}
        value={publishStatus}
      >
        {PublishStatusOptions.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </SelectBox>
    </S.Wrapper>
  )
}
