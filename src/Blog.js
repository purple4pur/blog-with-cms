import React, { PureComponent as Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import './Blog.css'
import { Header, Footer, ErrorBox } from 'components'
import {
  Home,
  Coding,
  Creating,
  Thoughts,
  About,
  Tags,
  NotFound,
  Admin
} from 'views'

class Blog extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Coding} path="/coding" exact />
          <Route component={Creating} path="/creating" exact />
          <Route component={Thoughts} path="/thoughts" exact />
          <Route component={Tags} path="/tags/:tagID?" exact />
          <Route component={About} path="/about" exact />
          <Route component={Admin} path="/admin/:viewSelector?" exact />
          <Route component={NotFound} path="/404" exact />
          <Redirect to="/404" />
        </Switch>
        <Footer />
        {
          this.props.isError ? <ErrorBox /> : null
        }
      </>
    )
  }
}

const mapToProps = state => ({
  isError: state.errorMsg.isError
})

export default connect(
  mapToProps
)(Blog)
