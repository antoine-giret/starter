import React from 'react'
import { Trans } from '@lingui/react'

function Header() {
  return (
    <>
      <h1>
        <Trans id="app_title" />
      </h1>
    </>
  )
}

export default Header
