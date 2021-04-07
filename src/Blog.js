import React, { PureComponent as Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import './Blog.css'
import { Header, Footer } from 'components'
import { ErrorBox } from 'containers'
import {
  Home,
  Coding,
  Creating,
  Thoughts,
  About,
  Tags,
  NotFound,
  Admin,
  Post,
  MurasameChanHelp
} from 'views'

class Blog extends Component {
  render() {
    return (
      <>
        <Header />
        <main className="main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/coding" component={Coding} />
            <Route exact path="/creating" component={Creating} />
            <Route exact path="/thoughts" component={Thoughts} />
            <Route exact path="/tags/:tagID?" component={Tags} />
            <Route exact path="/post/:id" component={Post} />
            <Route exact path="/about" component={About} />
            <Route exact path="/murasame-chan" component={MurasameChanHelp} />
            <Route exact path="/admin/:viewSelector?/:postID?" component={Admin} />
            <Route exact path="/404" component={NotFound} />
            <Redirect to="/404" />
          </Switch>
        </main>
        <Footer />
        {this.props.isError ? <ErrorBox /> : null}
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
