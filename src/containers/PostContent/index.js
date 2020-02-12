import React, { PureComponent } from 'react'
import ReactMarkdown from 'react-markdown'

import './index.css'

export default class PostContent extends PureComponent {
  render() {
    return (
      <div className="markdown-body">
        <ReactMarkdown source={this.props.content} skipHtml={true} />
      </div>
    )
  }
}
