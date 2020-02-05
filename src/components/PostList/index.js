import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { fetchList } from 'redux/actions'
import PostItem from './PostItem'

class PostList extends PureComponent {
  componentDidMount() {
    this.props.fetchList(this.props.categoryID)
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
  isLoading: state.categoryList.isLoading,
  fetchError: state.categoryList.fetchError,
  list: state.categoryList.list
})

export default connect(
  mapToProps, { fetchList }
)(PostList)
