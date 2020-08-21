import React from 'react'

import { AdminArticleCardsLoadingPlaceholderPresenter } from './presenter'

type Props = {
  length?: number
}

export const AdminArticleCardsLoadingPlaceholder: React.FC<Props> = (props) => {
  return <AdminArticleCardsLoadingPlaceholderPresenter {...props} />
}
