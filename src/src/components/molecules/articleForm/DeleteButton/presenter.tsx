import React from 'react'

import { SubmitButton } from '@/components/atoms'
import { Loadable } from '@/models'

type Props = {
  loadable: Loadable
  handleClick: () => void
}

export const DeleteButtonPresenter: React.FC<Props> = ({
  loadable,
  handleClick,
}) => (
  <SubmitButton
    type="submit"
    disabled={loadable.isLoading}
    onClick={() => handleClick()}
    value={'削除する'}
  />
)
