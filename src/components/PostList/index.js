import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { fetchList } from 'redux/actions'
import PostItem from './PostItem'

class PostList extends PureComponent {
  componentDidMount() {
    if (this.props.categoryID) {
      this.props.fetchList(this.props.categoryID, null)
      
    } else {
      this.props.fetchList(null, this.props.tagID)
    }
  }

  render() {
    if (this.props.isLoading) {
      return <div>loading...</div>

    } else if (this.props.fetchError) {
      return <div>获取数据失败，请与维护者联系。</div>

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
