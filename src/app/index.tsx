import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { I18nProvider } from '@lingui/react'
import { ThemeProvider } from '@material-ui/styles'

import Home from '../pages/home'

import catalogs from './catalogs'
import theme from './theme'
import Routes from './routes'

function App() {
  return (
    <I18nProvider catalogs={catalogs} language="fr">
      <ThemeProvider theme={theme}>
        <Router>
          <Route component={Home} path={Routes.HOME} />
        </Router>
      </ThemeProvider>
    </I18nProvider>
  )
}

export default App
