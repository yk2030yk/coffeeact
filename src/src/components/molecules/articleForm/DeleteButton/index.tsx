import React from 'react'

import { DeleteButtonPresenter } from './presenter'
import { useProps } from './hooks'

type Props = {
  articleId: string
}

export const DeleteButton: React.FC<Props> = ({ articleId }) => (
  <DeleteButtonPresenter {...useProps(articleId)} />
)
