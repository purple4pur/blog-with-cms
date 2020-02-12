import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { PostContent } from 'containers'
import { fetchPost } from 'redux/actions'

class Post extends PureComponent {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id, "readonly")
  }

  render() {
    document.title = (this.props.data.title ? this.props.data.title + ' - ' : '') + "Purple4pur's Blog"
    if (this.props.isLoading) {
      return <div>loading...</div>
    } else {
      return (
        <>
          <h1>{this.props.data.title}</h1>
          <PostContent content={this.props.data.content} />
        </>
      )
    }
  }
}

const mapToProps = state => ({
  isLoading: state.post.isLoading,
  data: state.post.data
})

export default connect(
  mapToProps, { fetchPost }
)(Post)
