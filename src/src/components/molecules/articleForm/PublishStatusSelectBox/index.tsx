import React from 'react'

import { PUBLISH_STATUS, PublishStatus } from '@/models/Article'

import { PublishStatusSelectBoxPresenter } from './presenter'
import { useProps } from './hooks'

type Props = {
  defaultValue?: PublishStatus
}

export const PublishStatusSelectBox: React.FC<Props> = ({
  defaultValue = PUBLISH_STATUS.UN_PUBLISH,
}) => <PublishStatusSelectBoxPresenter {...useProps(defaultValue)} />
