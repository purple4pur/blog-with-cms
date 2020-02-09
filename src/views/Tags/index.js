import React, { PureComponent } from 'react'

import { TagList, PostList } from 'components'

export default class Tags extends PureComponent {
  componentDidMount() {
    document.title = "标签 | Purple4pur's Blog"
  }

  render() {
    if (this.props.match.params.tagID) {
      return <PostList tagID={this.props.match.params.tagID} />

    } else {
      return <TagList />
    }
  }
}
