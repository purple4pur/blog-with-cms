import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import TagItem from './TagItem'
import { fetchTags } from 'redux/actions'
import './index.css'

class TagList extends PureComponent {
  componentDidMount() {
    this.props.fetchTags('valid')
  }

  render() {
    if (this.props.isLoading) {
      return <div>loading...</div>

    } else if (this.props.fetchError) {
      return <div>暂无数据</div>

    } else {
      return (
        <ul className="tag-list">
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
  isLoading: state.tagList.isLoading,
  fetchError: state.tagList.fetchError,
  tags: state.tagList.tags
})

export default connect(
  mapToProps, { fetchTags }
)(TagList)
