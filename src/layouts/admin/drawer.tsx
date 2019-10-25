import React from 'react'
import { Trans } from '@lingui/react'
import {
  Avatar,
  Card,
  CardHeader,
  Divider,
  Drawer as MuiDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import { DefaultTheme } from '@material-ui/styles'
import { ExitToApp as LogoutIcon } from '@material-ui/icons'
import styled from 'styled-components'

import { User } from '../../types'

interface IProps {
  logout: () => void
  onDrawerToggle: (open: boolean) => void
  open: boolean
  theme: DefaultTheme
  user: User
}

function Drawer({ theme, open, user, logout, onDrawerToggle }: IProps) {
  function handleLogout() {
    if (logout) {
      logout()
    }
  }

  function handleClose() {
    onDrawerToggle(false)
  }

  return (
    <MuiDrawer
      PaperProps={{ style: { width: 250 } }}
      onClose={handleClose}
      open={open}
    >
      <StyledCard square>
        <CardHeader
          avatar={
            <StyledAvatar theme={theme}>
              {`${user.firstName[0]}${user.lastName[0]}`}
            </StyledAvatar>
          }
          subheader={user.email}
          title={user.firstName}
        />
      </StyledCard>
      <StyledSpacer />
      <Divider />
      <div onClick={handleClose} onKeyDown={handleClose} role="presentation">
        <List>
          <ListItem button onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText
              primary={<Trans id="user.actions.logout">Se déconnecter</Trans>}
            />
          </ListItem>
        </List>
      </div>
    </MuiDrawer>
  )
}

const StyledCard = styled(Card)`
  flex-shrink: 0;
`

const StyledAvatar = styled(Avatar)<{ theme: DefaultTheme }>`
  && {
    background-color: ${({ theme }) => theme.palette.secondary.main};
    color: ${({ theme }) => theme.palette.secondary.contrastText};
  }
`

const StyledSpacer = styled.div`
  flex-grow: 1;
`

export default Drawer
