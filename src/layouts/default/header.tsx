import React from 'react'
import { Trans } from '@lingui/react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

function Header() {
  return (
    <AppBar color="default" elevation={0} position="fixed">
      <Toolbar>
        <Typography component="h1" variant="h6">
          <Trans id="app_title" />
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
