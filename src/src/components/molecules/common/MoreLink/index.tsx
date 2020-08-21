import React from 'react'

import { MoreLinkPresenter } from './presenter'

type Props = {
  text: string
  link: string
}

export const MoreLink: React.FC<Props> = (props) => (
  <MoreLinkPresenter {...props} />
)
