import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { I18nProvider } from '@lingui/react'
import { ThemeProvider } from '@material-ui/styles'

import { rootActions, TRootAction, TRootState } from '../store'
import { FirebaseErrors } from '../store/modules/firebase'
import catalogs from '../locales/catalogs'
import Home from '../pages/home'
import Login from '../pages/login'
import Admin from '../pages/admin'

import theme from './theme'
import Routes from './routes'
import PrivateRoute from './routes/private'
import GuestRoute from './routes/guest'

type TProps = ReturnType<typeof mapStateToProps> & TRootAction

function App({
  firebaseInitialized,
  user,
  firebaseErrors,
  firebaseInitRequest: initFirebase,
  firebaseLoginRequest: login,
  firebaseLogoutRequest: logout,
}: TProps) {
  useEffect(() => {
    if (!firebaseInitialized) {
      initFirebase()
    }
  }, [])

  return (
    <I18nProvider catalogs={catalogs} language="fr">
      <ThemeProvider theme={theme}>
        {firebaseInitialized ? (
          <Router>
            <Switch>
              <Route exact path={Routes.HOME}>
                <Home user={user} />
              </Route>
              <GuestRoute path={Routes.LOGIN} user={user}>
                <Login error={firebaseErrors[FirebaseErrors.LOGIN]} login={login} />
              </GuestRoute>
              <PrivateRoute path={Routes.ADMIN} user={user}>
                <Admin logout={logout} user={user} />
              </PrivateRoute>
            </Switch>
          </Router>
        ) : (
          <></>
        )}
      </ThemeProvider>
    </I18nProvider>
  )
}

function mapStateToProps({ firebase }: TRootState) {
  return {
    firebaseInitialized: firebase.initialized,
    user: firebase.user,
    firebaseErrors: firebase.errors,
  }
}

export default connect(
  mapStateToProps,
  rootActions,
)(App)
