import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { fetchList } from 'redux/actions'
import PostItem from './PostItem'

class PostList extends PureComponent {
  componentDidMount() {
    this.props.fetchList(this.props.categoryID)
  }

  render() {
    return (
      this.props.isLoading
        ? <div>loading...</div>
        : this.props.fetchError
          ? <div>fetch list error.</div>
          : <ul>
            {
              this.props.list.map(item => (
                <PostItem key={item.id} {...item} />
              ))
            }
          </ul>
    )
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
