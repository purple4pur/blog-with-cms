import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import TagItem from './TagItem'
import { fetchTags } from 'redux/actions'

class TagList extends PureComponent {
  componentDidMount() {
    this.props.fetchTags()
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
            this.props.tags.map(tag => (
              <TagItem key={tag.id} {...tag} />
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
  tags: state.tagList.tags
})

export default connect(
  mapToProps, { fetchTags }
)(TagList)
