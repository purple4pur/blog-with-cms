import React, { PureComponent } from 'react'
import { Helmet } from 'react-helmet'

export default class About extends PureComponent {
  render() {
    return (
      <>
        <Helmet>
          <title>关于 | Purple4pur's Blog</title>
        </Helmet>
        <h1>待完善的关于</h1>
        <span>此博客开源，项目地址：<a href="https://github.com/purple4pur/blog-with-cms" target="_blank" rel="noopener noreferrer">GitHub</a></span>
      </>
    )
  }
}
