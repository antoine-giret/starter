import React from 'react'
import { RouteProps } from 'react-router'
import { Redirect, Route } from 'react-router-dom'

import { User } from '../../types'

import Routes from './index'

interface IProps {
  user?: User | null
}

type TProps = RouteProps & IProps

function PrivateRoute({ children, user, ...rest }: TProps) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect to={{ pathname: Routes.LOGIN, state: { from: location } }} />
        )
      }
    />
  )
}

export default PrivateRoute
