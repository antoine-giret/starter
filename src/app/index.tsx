import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { I18nProvider } from '@lingui/react'
import { ThemeProvider } from '@material-ui/styles'

import { rootActions, TRootAction, TRootState } from '../store'
import catalogs from '../locales/catalogs'
import Home from '../pages/home'

import theme from './theme'
import Routes from './routes'

type TProps = ReturnType<typeof mapStateToProps> & TRootAction

function App({ firebaseInitialized, firebaseInitRequest }: TProps) {
  useEffect(() => {
    if (!firebaseInitialized) {
      firebaseInitRequest()
    }
  }, [])

  return (
    <I18nProvider catalogs={catalogs} language="fr">
      <ThemeProvider theme={theme}>
        {firebaseInitialized ? (
          <Router>
            <Route component={Home} path={Routes.HOME} />
          </Router>
        ) : (
          <></>
        )}
      </ThemeProvider>
    </I18nProvider>
  )
}

function mapStateToProps({ firebase }: TRootState) {
  return { firebaseInitialized: firebase.initialized }
}

export default connect(
  mapStateToProps,
  rootActions,
)(App)
