import React, { MouseEvent } from 'react'
import { useHistory } from 'react-router-dom'

import { Element } from '@/types/element'
import * as S from './index.styled'
import Text from '../Text'

type Props = {
  path?: string
} & Element

const Link: React.FC<Props> = ({ path, children, onClick }) => {
  const history = useHistory()

  const handleClick = (e: MouseEvent<HTMLInputElement>) => {
    if (onClick) {
      onClick(e)
    } else if (path) {
      history.push(path)
    }
  }

  return (
    <S.Link onClick={handleClick}>
      <Text>{children}</Text>
    </S.Link>
  )
}

export default Link
