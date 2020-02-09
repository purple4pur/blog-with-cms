import React, { PureComponent } from 'react'

export default class About extends PureComponent {
  componentDidMount() {
    document.title = "关于 | Purple4pur's Blog"
  }

  render() {
    return (
      <>
        <h1>这里是关于。Coming soon.</h1>
      </>
    )
  }
}
