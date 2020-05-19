import React from 'react'
import MuiTypography from '@material-ui/core/Typography'

type Props = {
  text: string
}

const Typography: React.FC<Props> = ({ text }) => (
  <MuiTypography>{text}</MuiTypography>
)

export default Typography
