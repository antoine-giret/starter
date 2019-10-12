import React from 'react'
import { Typography } from '@material-ui/core'

import Layout from '../layouts/admin'
import { User } from '../types'

interface IProps {
  logout: () => void
  user?: User | null
}

function Admin({ user, logout }: IProps) {
  if (!user) {
    return <></>
  }

  return (
    <Layout logout={logout} user={user}>
      <Typography variant="body1">Admin</Typography>
    </Layout>
  )
}

export default Admin
