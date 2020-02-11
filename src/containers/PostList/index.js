import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { fetchList } from 'redux/actions'
import PostItem from './PostItem'

class PostList extends PureComponent {
  componentDidMount() {
    if (this.props.categoryID) {
      this.props.fetchList(this.props.categoryID, undefined, undefined, undefined)
    } else if (this.props.tagID) {
      this.props.fetchList(undefined, this.props.tagID, undefined, undefined)
    } else if (this.props.authorID) {
      this.props.fetchList(undefined, undefined, this.props.authorID, undefined)
    } else {
      this.props.fetchList(undefined, undefined, undefined, this.props.type)
    }
  }

  render() {
    if (this.props.isLoading) {
      return <div>loading...</div>

    } else if (this.props.fetchError) {
      return null

    } else {
      return (
        <ul>
          {
            this.props.list.map(item => (
              <PostItem key={item.id} {...item} />
            ))
          }
        </ul>
      )
    }
  }
}

const mapToProps = state => ({
  isLoading: state.postList.isLoading,
  fetchError: state.postList.fetchError,
  list: state.postList.list
})

export default connect(
  mapToProps, { fetchList }
)(PostList)
