import React, { useState } from 'react'
import { DefaultTheme, useTheme } from '@material-ui/styles'
import styled from 'styled-components'

import { User } from '../../types'

import Header from './header'
import Drawer from './drawer'

interface IProps {
  children: React.ReactNode
  logout: () => void
  user: User
}

function Layout({ children, user, logout }: IProps) {
  const [drawerOpen, toggleDrawer] = useState<boolean>(false)
  const theme = useTheme()

  return (
    <>
      <Header onDrawerToggle={toggleDrawer} />
      <Wrapper>
        <StyledHeader theme={theme} />
        <StyledContent>{children}</StyledContent>
      </Wrapper>
      <Drawer
        logout={logout}
        onDrawerToggle={toggleDrawer}
        open={drawerOpen}
        theme={theme}
        user={user}
      />
    </>
  )
}

const StyledHeader = styled.div<{ theme: DefaultTheme }>`
  ${({ theme }) => theme.mixins.toolbar}
`

const Wrapper = styled.div`
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const StyledContent = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 16px;
`

export default Layout
