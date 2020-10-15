import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './pages/landing';
import OrphanesMap from './pages/OrphanesMap'

function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Landing}/>
        <Route path='/app' component={OrphanesMap}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;