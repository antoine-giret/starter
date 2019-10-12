import React from 'react'
import { Theme } from '@material-ui/core'
import { useTheme } from '@material-ui/styles'
import styled from 'styled-components'

import { User } from '../../types'

import Header from './header'

interface IProps {
  children: React.ReactNode
  logout: () => void
  user: User
}

function Layout({ children, user, logout }: IProps) {
  const theme = useTheme()

  return (
    <>
      <Header logout={logout} user={user} />
      <Wrapper>
        <StyledHeader theme={theme} />
        <StyledContent>{children}</StyledContent>
      </Wrapper>
    </>
  )
}

const StyledHeader = styled.div<{ theme: Theme }>`
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
