import React from 'react'
import { Typography } from '@material-ui/core'

import Layout from '../layouts/default'
import { User } from '../types'

interface IProps {
  logout: () => void
  user?: User | null
}

function Admin({ user, logout }: IProps) {
  return (
    <Layout enableUserMenu logout={logout} user={user}>
      <Typography variant="body1">Admin</Typography>
    </Layout>
  )
}

export default Admin
