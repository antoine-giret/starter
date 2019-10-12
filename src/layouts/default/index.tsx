import React from 'react'
import { Theme } from '@material-ui/core'
import { useTheme } from '@material-ui/styles'
import styled from 'styled-components'

import Header from './header'
import Footer from './footer'

interface IProps {
  children: React.ReactNode
}

function Layout({ children }: IProps) {
  const theme = useTheme()

  return (
    <>
      <Header />
      <Wrapper>
        <StyledHeader theme={theme} />
        <StyledContent>{children}</StyledContent>
        <Footer />
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
