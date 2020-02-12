import React, { PureComponent } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { verifyToken, removeToken, fetchPost } from 'redux/actions'
import { Login } from 'views'
import AdminNav from './AdminNav'
import Manage from './Manage'
import NewPost from './NewPost'
import Draft from './Draft'
import Private from './Private'

const title = {
  'login': '登陆',
  'manage': '文章管理',
  'newpost': '文章发布',
  'draft': '草稿箱',
  'private': '非公开文章'
}

class Admin extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      activeView: this.props.match.params.viewSelector,
      postID: this.props.match.params.postID,
      isReadyToRedirect: false
    }
  }

  componentDidMount() {
    document.title = title[this.state.activeView] + " - CMS | Purple4pur's Blog"
    this.props.verifyToken()
    if (this.state.postID) {
      this.props.fetchPost(this.state.postID, 'edit')
    }
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
            <Redirect exact from="/admin" to="/admin/manage" />
            <Route exact path="/admin/manage" component={Manage} />
            <Route exact path="/admin/newpost/:postID?" render={props => <NewPost {...props} />} />
            <Route exact path="/admin/draft" component={Draft} />
            <Route exact path="/admin/private" component={Private} />
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
  activeUserID: state.adminStatus.activeUserID,
  oriData: state.post.data
})

export default connect(
  mapToProps, { verifyToken, removeToken, fetchPost }
)(Admin)
