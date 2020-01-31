import React, { PureComponent as Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import './Blog.css'
import {
  Home,
  Coding,
  Creating,
  Thoughts,
  About
} from 'views'

export default class Blog extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Coding} path="/coding" exact />
          <Route component={Creating} path="/creating" exact />
          <Route component={Thoughts} path="/thoughts" exact />
          <Route component={About} path="/about" exact />
          <Redirect to="/" />
        </Switch>
      </>
    )
  }
}
