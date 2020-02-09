import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import './index.css'
import { verifyLogin, verifyToken } from 'redux/actions'

class Login extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      user: '',
      pwd: '',
      focus1: false,
      focus2: false
    }
  }

  render() {
    if (this.props.isLoading) {
      return <div>loading...</div>

    } else if (!this.props.isLoggedIn) {
      return (
        <div className="login-box">
          <form className="login-form">
            <div className="login-txtb">
              <input type="text"
                name="username"
                placeholder="USERNAME"
                value={this.state.user}
                autoComplete="off"
                onChange={this.handleChgUser}
                onFocus={this.handleFocus1}
                onBlur={this.handleBlur1}
              />
              <div className={'login-txtb-not-focus' + (this.state.focus1 ? ' login-txtb-focus' : '')}></div>
            </div>
            <div className="login-txtb">
              <input
                type="password"
                name="password"
                placeholder="********"
                value={this.state.pwd}
                autoComplete="off"
                onChange={this.handleChgPwd}
                onFocus={this.handleFocus2}
                onBlur={this.handleBlur2}
              />
              <div className={'login-txtb-not-focus' + (this.state.focus2 ? ' login-txtb-focus' : '')}></div>
            </div>
            <div className="login-btns">
              <input type="submit" value="登陆" onClick={this.handleSubmit} />
              <input type="reset" value="重置" onClick={this.handleReset} />
            </div>
          </form>
        </div>
      )

    } else {
      return <Redirect to="/admin" />
    }
  }

  handleFocus1 = () => {
    this.setState({ focus1: true })
  }

  handleBlur1 = () => {
    if (this.state.user === '') {
      this.setState({ focus1: false })
    }
  }

  handleFocus2 = () => {
    this.setState({ focus2: true })
  }

  handleBlur2 = () => {
    if (this.state.pwd === '') {
      this.setState({ focus2: false })
    }
  }

  handleChgUser = (e) => {
    this.setState({ user: e.target.value })
  }

  handleChgPwd = (e) => {
    this.setState({ pwd: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.verifyLogin(this.state.user, this.state.pwd)
  }

  handleReset = (e) => {
    e.preventDefault()
    this.setState({ user: '', pwd: '', focus1: false, focus2: false })
  }
}

const mapToProps = state => ({
  isLoading: state.adminStatus.isLoading,
  isLoggedIn: state.adminStatus.isLoggedIn
})

export default connect(
  mapToProps, { verifyLogin, verifyToken }
)(Login)
