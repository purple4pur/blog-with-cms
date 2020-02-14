import React, { PureComponent } from 'react'

import { PostList } from 'containers'
import './index.css'

export default class Coding extends PureComponent {
  componentDidMount() {
    document.title = "代码 | Purple4pur's Blog"
  }

  render() {
    return (
      <>
        <div className="category-header">
          <h1>代码 | CODING</h1>
          <p>学是学不懂的了，只能瞎码码这样子。</p>
        </div>
        <PostList categoryID={1} />
      </>
    )
  }
}
