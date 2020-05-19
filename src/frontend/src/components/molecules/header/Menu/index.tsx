import React, { useState, MouseEvent } from 'react'
import { Menu as MuiMenu } from '@material-ui/core'

import * as S from './index.styled'
import { Text, Link, MenuItem } from '@/components/atoms'
import { isDefine } from '@/utils/util'

const Menu: React.FC = () => {
  const [element, setElement] = useState<null | HTMLElement>(null)

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setElement(event.currentTarget)
  }

  const handleClose = () => {
    setElement(null)
  }

  return (
    <>
      <Link onClick={handleClick}>Open Menu</Link>
      <MuiMenu
        anchorEl={element}
        keepMounted
        open={isDefine(element)}
        onClose={handleClose}
      >
        <S.Wrapper>
          <MenuItem>
            <Text>Profile</Text>
          </MenuItem>
          <MenuItem>
            <Text>Profile</Text>
          </MenuItem>
          <MenuItem>
            <Text>Profile</Text>
          </MenuItem>
        </S.Wrapper>
      </MuiMenu>
    </>
  )
}

export default Menu
