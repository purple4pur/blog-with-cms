import React, { PureComponent } from 'react'
import { Helmet } from 'react-helmet'

import { PostList } from 'containers'
import './index.css'

export default class Creating extends PureComponent {
  render() {
    return (
      <>
        <Helmet>
          <title>创作 | Purple4pur's Blog</title>
        </Helmet>
        <div className="category-header">
          <h1>创作 | CREATING</h1>
          <p>你也想成为 Adobe 全家桶带师吗？</p>
        </div>
        <PostList categoryID={2} />
      </>
    )
  }
}
