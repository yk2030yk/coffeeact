import React from 'react'
import PropagateLoader from 'react-spinners/PropagateLoader'
import { theme } from '@/styles'

const CustomClipLoader: React.FC = () => (
  <PropagateLoader color={theme.color.reactBlue} />
)

export default CustomClipLoader
