import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { PostList } from 'containers'

class Manage extends PureComponent {
  render() {
    return (
      <>
        <PostList authorID={this.props.activeUserID} />
      </>
    )
  }
}

const mapToProps = state => ({
  activeUserID: state.adminStatus.activeUserID
})

export default connect(
  mapToProps
)(Manage)
