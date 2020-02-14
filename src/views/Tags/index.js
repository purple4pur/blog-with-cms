import React, { PureComponent } from 'react'

import { TagList, PostList } from 'containers'
import './index.css'

export default class Tags extends PureComponent {
  componentDidMount() {
    document.title = "标签 | Purple4pur's Blog"
  }

  render() {
    if (this.props.match.params.tagID) {
      return <PostList tagID={this.props.match.params.tagID} />

    } else {
      return (
        <>
          <div className="tags-header">
            <h1>标签</h1>
            <p></p>
          </div>
          <TagList />
        </>
      )
    }
  }
}
