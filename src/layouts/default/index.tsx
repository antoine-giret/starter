import React from 'react'

import Header from './header'
import Footer from './footer'

interface IProps {
  children: React.ReactNode
}

function Layout({ children }: IProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
