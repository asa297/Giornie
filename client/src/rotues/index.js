import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomePage, AboutPage, LoginPage } from '@pages'

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/login" component={LoginPage} />
    </Switch>
  )
}

export { Routing }
