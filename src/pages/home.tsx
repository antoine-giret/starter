import React from 'react'
import { Typography } from '@material-ui/core'

import Layout from '../layouts/default'
import { User } from '../types'

interface IProps {
  user?: User | null
}

function Home({ user }: IProps) {
  return (
    <Layout user={user}>
      <Typography variant="body1">Home</Typography>
    </Layout>
  )
}

export default Home
