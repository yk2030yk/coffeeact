import React from 'react'
import PropagateLoader from 'react-spinners/PropagateLoader'

import { theme } from '@/styles'

type PropagateLoaderProps = React.ComponentProps<typeof PropagateLoader>

type Props = PropagateLoaderProps

const CustomClipLoader: React.FC<Props> = (props) => (
  <PropagateLoader color={theme.color.reactBlue} {...props} />
)

export default CustomClipLoader
