import React, { PureComponent } from 'react'

export default class NotFound extends PureComponent {
  componentDidMount() {
    document.title = "404 | Purple4pur's Blog"
  }

  render() {
    return (
      <div>
        404. 未找到此页面。
      </div>
    )
  }
}
