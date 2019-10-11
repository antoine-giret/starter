import React from 'react'
import { RouteProps } from 'react-router'
import { Redirect, Route } from 'react-router-dom'

import { User } from '../../types'

import Routes from './index'

interface IProps {
  user?: User | null
}

type TProps = RouteProps & IProps

function GuestRoute({ children, user, location, ...rest }: TProps) {
  if (user) {
    const { pathname } = (location && location.state && location.state.from) || {
      pathname: Routes.HOME,
    }

    return <Redirect to={{ pathname }} />
  }

  return <Route {...rest} render={({ location }) => children} />
}

export default GuestRoute
