import React from 'react'

import { SubmitButton } from '@/components/atoms'
import { Loadable } from '@/models'

type Props = {
  isValid: boolean
  loadable: Loadable
  handleClick: () => void
}

export const UpdateButtonPresenter: React.FC<Props> = ({
  isValid,
  loadable,
  handleClick,
}) => (
  <SubmitButton
    type="submit"
    disabled={!isValid || loadable.isLoading}
    onClick={() => handleClick()}
    value={'更新する'}
  />
)
