import React from 'react'

import { SelectTagListPresenter } from './presenter'
import { useProps } from './hooks'

type Props = {
  defaultValue?: string[]
}

export const SelectTagList: React.FC<Props> = ({ defaultValue = [] }) => (
  <SelectTagListPresenter {...useProps(defaultValue)} />
)
