import React, { PureComponent } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { verifyStatus } from 'services'
import { Login } from 'components'

class Admin extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      activeView: this.props.match.params.viewSelector
    }
  }

  componentDidMount() {
    this.checkToken()
  }

  render() {
    if (this.state.isLoggedIn) {
      return (
        <>
          <span>已经登陆为：{this.state.activeUser}</span>
          <input type="button" value="退出" onClick={this.handleRmToken} />
        </>
      )
    } else {
      return (
        <Switch>
          <Route component={Login} path="/admin/login" />
          <Redirect to="/admin/login" />
        </Switch>
      )
    }
  }

  checkToken = () => {
    if (localStorage.getItem('purple4pur/blog:JWT')) {
      verifyStatus(undefined, undefined, localStorage.getItem('purple4pur/blog:JWT'))
        .then(resp => {
          if (resp.data.activeUser) {
            this.setState({
              isLoggedIn: true,
              activeUser: resp.data.activeUser
            })
          }
        })
    } else {
      this.setState({
        isLoggedIn: false,
        activeUser: ''
      })
    }
  }

  handleRmToken = () => {
    localStorage.removeItem('purple4pur/blog:JWT')
    this.checkToken()
  }
}

export default connect(

)(Admin)
