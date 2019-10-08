import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from '../pages/home'

import Routes from './routes'

function App() {
  return (
    <Router>
      <Route component={Home} path={Routes.HOME} />
    </Router>
  )
}

export default App
