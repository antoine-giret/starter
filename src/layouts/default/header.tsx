import React, { useState } from 'react'
import { Trans } from '@lingui/react'
import {
  AppBar,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { AccountCircle as AccountIcon } from '@material-ui/icons'
import styled from 'styled-components'

import { User } from '../../types'

interface IProps {
  enableUserMenu?: boolean
  user?: User | null
  logout?: () => void
}

function Header({ user, enableUserMenu, logout }: IProps) {
  const [
    userButtonAnchorEl,
    setUserButtonAnchorEl,
  ] = useState<HTMLButtonElement | null>(null)

  function handleUserButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
    setUserButtonAnchorEl(event.currentTarget)
  }

  function handleUserMenuClose() {
    setUserButtonAnchorEl(null)
  }

  function handleLogout() {
    if (logout) {
      logout()
      setUserButtonAnchorEl(null)
    }
  }

  return (
    <AppBar color="default" elevation={0} position="fixed">
      <Toolbar>
        <Typography component="h1" variant="h6">
          <Trans id="app_title" />
        </Typography>
        <StyledSpacer />
        {user && enableUserMenu && (
          <>
            <Button
              aria-controls="user-menu"
              aria-haspopup="true"
              onClick={handleUserButtonClick}
              startIcon={<AccountIcon />}
              variant="outlined"
            >
              {user.firstName}
            </Button>
            <Menu
              anchorEl={userButtonAnchorEl}
              id="user-menu"
              keepMounted
              onClose={handleUserMenuClose}
              open={Boolean(userButtonAnchorEl)}
            >
              <MenuItem onClick={handleLogout}>
                <Trans id="user.actions.logout">Se déconnecter</Trans>
              </MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}

const StyledSpacer = styled.div`
  flex-grow: 1;
`

export default Header
