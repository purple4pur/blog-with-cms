import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

import { TagList, PostList } from 'containers'
import { fetchTags } from 'redux/actions'
import './index.css'

class Tags extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      tagName: ''
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.match.params.tagID && state.tagName === '') {
      props.fetchTags('valid')
      for (let i in props.tags) {
        if (props.tags[i].id === props.match.params.tagID) {
          return { tagName: props.tags[i].name }
        }
      }
    }
    return null
  }

  render() {
    if (this.props.match.params.tagID) {
      return (
        <>
          <Helmet>
            <title>#{this.state.tagName} - 标签 | Purple4pur's Blog</title>
          </Helmet>
          <div className="tags-header">
            <h1>带有 #{this.state.tagName} 标签的文章</h1>
            <p></p>
          </div>
          <PostList tagID={this.props.match.params.tagID} />
        </>
      )

    } else {
      return (
        <>
          <Helmet>
            <title>标签 | Purple4pur's Blog</title>
          </Helmet>
          <div className="tags-header">
            <h1>所有标签</h1>
            <p></p>
          </div>
          <TagList />
        </>
      )
    }
  }
}

const mapToProps = state => ({
  tags: state.tagList.tags
})

export default connect(
  mapToProps, { fetchTags }
)(Tags)
