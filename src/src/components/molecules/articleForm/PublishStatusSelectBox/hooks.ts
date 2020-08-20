import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

import { PUBLISH_STATUS, PublishStatus } from '@/models/Article'
import { publishStatusState } from '@/recoil/articleForm'

export const useProps = (defaultValue: PublishStatus) => {
  const [publishStatus, setPublishStatus] = useRecoilState(publishStatusState)

  useEffect(() => {
    if (!defaultValue) return
    setPublishStatus(defaultValue)
  }, [defaultValue, setPublishStatus])

  const handleChange = (value: string) => {
    if (PUBLISH_STATUS.PUBLISH === value || PUBLISH_STATUS.UN_PUBLISH === value)
      setPublishStatus(value)
  }

  return {
    publishStatus,
    handleChange,
  }
}
