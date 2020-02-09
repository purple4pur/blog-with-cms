import React, { PureComponent } from 'react'

export default class About extends PureComponent {
  componentDidMount() {
    document.title = "关于 | Purple4pur's Blog"
  }

  render() {
    return (
      <>
        <h1>关于</h1>
      </>
    )
  }
}
