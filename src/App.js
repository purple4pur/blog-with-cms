import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css'
import {
  Home,
  Coding,
  Creating,
  Thoughts,
  About
} from 'views'

export default class App extends Component {
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
