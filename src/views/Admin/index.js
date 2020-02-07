import React, { PureComponent } from 'react'

import { verifyLogin } from 'services'

export default class Admin extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      user: 'purple4pur',
      pwd: '123456',
      isLoggedIn: false
    }
  }

  componentDidMount() {
    this.checkToken()
  }

  render() {
    if (this.state.isLoggedIn) {
      return (
        <>
          <div>已经登陆</div>
          <input type="button" value="移除token" onClick={this.handleRmToken} />
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
    if (localStorage.getItem('purple4pur/blog')) {
      console.log('token is stored.')
      this.setState({
        isLoggedIn: true
      })
    } else {
      console.log('no token.')
      this.setState({
        isLoggedIn: false
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
    verifyLogin(this.state.user, this.state.pwd, 'send-from-client')
      .then(resp => {
        console.log(resp)
        // if (resp.data.charAt(0) !== '!') {
        //   console.log('logged in.')
        //   localStorage.setItem('purple4pur/blog', resp.data)
        //   console.log('get token.')
        //   this.setState({
        //     isLoggedIn: true
        //   })
        // } else {
        //   console.log(resp.data)
        // }
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
    localStorage.removeItem('purple4pur/blog')
    this.checkToken()
  }
}
