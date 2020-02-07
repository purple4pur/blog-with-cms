import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { verifyLogin, verifyToken } from 'redux/actions'

class Login extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      user: 'purple4pur',
      pwd: '123456'
    }
  }

  render() {
    return (
      this.props.isLoggedIn
        ? <Redirect to="/admin" />
        : <form>
          <div>
            <span>用户名：</span>
            <input type="text" name="username" placeholder="username" value={this.state.user} autoComplete="off" onChange={this.handleChgUser} />
          </div>
          <div>
            <span>密码：</span>
            <input type="password" name="password" placeholder="********" value={this.state.pwd} autoComplete="off" onChange={this.handleChgPwd} />
          </div>
          <input type="submit" value="登陆" onClick={this.handleSubmit} />
          <input type="reset" value="重置" onClick={this.handleReset} />
        </form>
    )
  }

  handleChgUser = (e) => {
    this.setState({
      user: e.target.value
    })
  }

  handleChgPwd = (e) => {
    this.setState({
      pwd: e.target.value
    })
  }

  handleSubmit = (e) => {
    console.log('into handleSubmit')
    e.preventDefault()
    this.props.verifyLogin(this.state.user, this.state.pwd)
  }

  handleReset = (e) => {
    e.preventDefault()
    this.setState({
      user: '',
      pwd: ''
    })
  }
}

const mapToProps = state => ({
  isLoggedIn: state.adminStatus.isLoggedIn
})

export default connect(
  mapToProps, { verifyLogin, verifyToken }
)(Login)
