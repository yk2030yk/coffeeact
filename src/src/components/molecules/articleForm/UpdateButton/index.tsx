import React from 'react'

import { UpdateButtonPresenter } from './presenter'
import { useProps } from './hooks'

type Props = {
  articleId: string
}

export const UpdateButton: React.FC<Props> = ({ articleId }) => (
  <UpdateButtonPresenter {...useProps(articleId)} />
)
