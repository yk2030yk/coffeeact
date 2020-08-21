import React from 'react'

import { CurrentArticleCardsLoadingPlaceholderPresenter } from './presenter'

type Props = {
  length?: number
}

export const CurrentArticleCardsLoadingPlaceholder: React.FC<Props> = (
  props
) => <CurrentArticleCardsLoadingPlaceholderPresenter {...props} />
