import React, { PureComponent } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { verifyToken, removeToken } from 'redux/actions'
import { Login } from 'views'
import AdminNav from './AdminNav'
import Manage from './Manage'
import NewPost from './NewPost'
import Draft from './Draft'
import Stats from './Stats'

const title = {
  'login': '登陆',
  'manage': '文章管理',
  'newpost': '文章发布',
  'draft': '草稿箱',
  'stats': '技术统计'
}

class Admin extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      activeView: this.props.match.params.viewSelector,
      isReadyToRedirect: false
    }
  }

  componentDidMount() {
    document.title = title[this.state.activeView] + " - CMS | Purple4pur's Blog"
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
          <AdminNav view={this.state.activeView} />
          <Switch>
            <Redirect from="/admin" to="/admin/manage" exact />
            <Route component={Manage} path="/admin/manage" exact />
            <Route component={NewPost} path="/admin/newpost" exact />
            <Route component={Draft} path="/admin/draft" exact />
            <Route component={Stats} path="/admin/stats" exact />
            <Redirect to="/404" />
          </Switch>
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
  activeUser: state.adminStatus.activeUser,
  activeUserID: state.adminStatus.activeUserID
})

export default connect(
  mapToProps, { verifyToken, removeToken }
)(Admin)
