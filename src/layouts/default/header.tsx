import React from 'react'
import { Trans } from '@lingui/react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import styled from 'styled-components'

function Header() {
  return (
    <AppBar color="default" elevation={0} position="fixed">
      <Toolbar>
        <Typography component="h1" variant="h6">
          <Trans id="app_title" />
        </Typography>
        <StyledSpacer />
      </Toolbar>
    </AppBar>
  )
}

const StyledSpacer = styled.div`
  flex-grow: 1;
`

export default Header
