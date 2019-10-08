import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'

import Home from '../pages/home'

import Routes from './routes'
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route component={Home} path={Routes.HOME} />
      </Router>
    </ThemeProvider>
  )
}

export default App
