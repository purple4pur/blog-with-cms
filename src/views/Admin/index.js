import React, { PureComponent } from 'react'

import { verifyLogin } from 'services'

export default class Admin extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      user: 'purple4pur',
      pwd: '123456',
      isLoggedIn: false,
      activeUser: ''
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
        <form>
          <div>
            <input type="text" name="username" placeholder="username" value={this.state.user} autoComplete="off" onChange={this.handleChgUser} />
          </div>
          <div>
            <input type="password" name="password" placeholder="********" value={this.state.pwd} autoComplete="off" onChange={this.handleChgPwd} />
          </div>
          <input type="submit" value="登陆" onClick={this.handleSubmit} />
          <input type="reset" value="重置" onClick={this.handleReset} />
        </form>
      )
    }
  }

  checkToken = () => {
    if (localStorage.getItem('purple4pur/blog:JWT')) {
      verifyLogin(undefined, undefined, localStorage.getItem('purple4pur/blog:JWT'))
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
    e.preventDefault()
    verifyLogin(this.state.user, this.state.pwd, undefined)
      .then(resp => {
        if (resp.data === 'Verified.') {
          localStorage.setItem('purple4pur/blog:JWT', resp.headers.authorization)
          this.setState({
            isLoggedIn: true,
            activeUser: this.state.user
          })
        } else {
          console.log(resp.data)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleReset = (e) => {
    e.preventDefault()
    this.setState({
      user: '',
      pwd: ''
    })
  }

  handleRmToken = () => {
    localStorage.removeItem('purple4pur/blog:JWT')
    this.checkToken()
  }
}
