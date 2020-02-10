import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { PostContent } from 'containers'
import { addPost } from 'redux/actions'

class NewPost extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      content: ''
    }
  }

  render() {
    return (
      <>
        <form>
          <div>
            <span>标题：</span>
            <input type="text" name="title" value={this.state.title} onChange={this.updateTitle} />
          </div>
          <div>
            <span>正文：</span>
            <textarea name="content" value={this.state.content} onChange={this.updateContent} />
          </div>
          <div className="preview-box">
            <span>正文预览：</span>
            <PostContent content={this.state.content} />
          </div>
          <div>
            <span>{this.props.msg}</span>
            <input type="submit" value="发布" onClick={this.handleSubmit} />
          </div>
        </form>
        {this.props.isLoading ? <div>发布中...</div> : null}
      </>
    )
  }

  updateTitle = (e) => {
    this.setState({ title: e.target.value })
  }

  updateContent = (e) => {
    this.setState({ content: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addPost(this.state.title, this.state.content)
  }
}

const mapToProps = state => ({
  isLoading: state.addPost.isLoading,
  msg: state.addPost.msg
})

export default connect(
  mapToProps, { addPost }
)(NewPost)
