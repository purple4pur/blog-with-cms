import React, { PureComponent } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { verifyToken, removeToken } from 'redux/actions'
import { Login } from 'views'

class Admin extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      activeView: this.props.match.params.viewSelector,
      isReadyToRedirect: false
    }
  }

  componentDidMount() {
    this.props.verifyToken()
    this.setState({ isReadyToRedirect: true })
  }

  render() {
    if (this.state.activeView === 'login') {
      return <Route component={Login} path="/admin/login" />

    } else if (this.props.isLoading || !this.state.isReadyToRedirect) {
      return <div>loading...</div>

    } else if (this.props.isLoggedIn) {
      return (
        <>
          <span>已经登陆为：{this.props.activeUser}</span>
          <input type="button" value="退出" onClick={this.handleRmToken} />
        </>
      )

    } else {
      return <Redirect to="/admin/login" />
    }
  }

  handleRmToken = () => {
    this.props.removeToken()
  }
}

const mapToProps = state => ({
  isLoading: state.adminStatus.isLoading,
  isLoggedIn: state.adminStatus.isLoggedIn,
  activeUser: state.adminStatus.activeUser
})

export default connect(
  mapToProps, { verifyToken, removeToken }
)(Admin)
