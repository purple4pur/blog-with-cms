import React, { PureComponent } from 'react'

import { PostList } from 'containers'
import './index.css'

export default class Thoughts extends PureComponent {
  componentDidMount() {
    document.title = "杂谈 | Purple4pur's Blog"
  }

  render() {
    return (
      <>
        <div className="category-header">
          <h1>杂谈 | THOUGHTS</h1>
          <p>想写也写不出来，你要我怎么样嘛！</p>
        </div>
        <PostList categoryID={3} />
      </>
    )
  }
}
