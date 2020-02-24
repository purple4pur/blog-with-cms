import React, { PureComponent } from 'react'
import { Helmet } from 'react-helmet'

import { PostList } from 'containers'
import './index.css'

export default class Thoughts extends PureComponent {
  render() {
    return (
      <>
        <Helmet>
          <title>杂谈 | Purple4pur's Blog</title>
        </Helmet>
        <div className="category-header">
          <h1>杂谈 | THOUGHTS</h1>
          <p>想写也写不出来，你要我怎么样嘛！</p>
        </div>
        <PostList categoryID={3} />
      </>
    )
  }
}
