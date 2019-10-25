import React from 'react'
import { Link } from 'react-router-dom'
import { Trans } from '@lingui/react'
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'
import { AccountCircle as AccountIcon } from '@material-ui/icons'
import styled from 'styled-components'

import Routes from '../../app/routes'
import { User } from '../../types'

interface IProps {
  user?: User | null
}

function Header({ user }: IProps) {
  return (
    <AppBar color="default" elevation={0} position="fixed">
      <Toolbar>
        <Link style={{ color: 'inherit', textDecoration: 'none' }} to={Routes.HOME}>
          <Typography color="inherit" component="h1" variant="h6">
            <Trans id="app_title" />
          </Typography>
        </Link>
        <StyledSpacer />
        {user ? (
          <Button
            component={Link}
            startIcon={<AccountIcon />}
            to={Routes.ADMIN}
            variant="outlined"
          >
            {user.firstName}
          </Button>
        ) : (
          <Button component={Link} to={Routes.LOGIN} variant="outlined">
            <Trans id="user.actions.login">Se connecter</Trans>
          </Button>
        )}
      </Toolbar>
    </AppBar>
  )
}

const StyledSpacer = styled.div`
  flex-grow: 1;
`

export default Header
