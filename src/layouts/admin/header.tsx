import React from 'react'
import { Link } from 'react-router-dom'
import { Trans } from '@lingui/react'
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'
import styled from 'styled-components'

import Routes from '../../app/routes'

interface IProps {
  onDrawerToggle: (open: boolean) => void
}

function Header({ onDrawerToggle }: IProps) {
  function handleDrawerOpen() {
    onDrawerToggle(true)
  }

  return (
    <AppBar color="primary" position="fixed">
      <Toolbar>
        <StyledMenuButton
          aria-label="menu"
          color="inherit"
          edge="start"
          onClick={handleDrawerOpen}
        >
          <MenuIcon />
        </StyledMenuButton>
        <Link style={{ color: 'inherit', textDecoration: 'none' }} to={Routes.HOME}>
          <Typography color="inherit" component="h1" variant="h6">
            <Trans id="app_title" />
          </Typography>
        </Link>
        <StyledSpacer />
      </Toolbar>
    </AppBar>
  )
}

const StyledMenuButton = styled(IconButton)`
  && {
    margin-right: 16px;
  }
`

const StyledSpacer = styled.div`
  flex-grow: 1;
`

export default Header
