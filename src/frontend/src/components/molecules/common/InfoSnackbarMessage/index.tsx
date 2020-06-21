import React from 'react'
import { RiInformationLine } from 'react-icons/ri'

import { theme, colorUtils } from '@/styles'
import SnackbarMessage from '../SnackbarMessage'

type Props = {
  message: string
}

const InfoSnackbarMessage: React.FC<Props> = ({ message }) => (
  <SnackbarMessage
    message={message}
    Icon={RiInformationLine}
    color={colorUtils.alpha(theme.color.blueRibbon)}
  />
)

export default InfoSnackbarMessage
