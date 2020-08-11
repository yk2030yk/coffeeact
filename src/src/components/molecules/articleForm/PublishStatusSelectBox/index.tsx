import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'

import * as S from './index.styled'
import { SelectBox } from '@/components/atoms'
import { PUBLISH_STATUS, PublishStatus } from '@/models/Article'
import { publishStatusState } from '@/recoil/articleForm'

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

  const handleChange = (value: string) => {
    if (PUBLISH_STATUS.PUBLISH === value || PUBLISH_STATUS.UN_PUBLISH === value)
      setPublishStatus(value)
  }

  return (
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
}
