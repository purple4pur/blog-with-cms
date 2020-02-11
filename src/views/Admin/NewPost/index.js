import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { PostContent } from 'containers'
import { addPost } from 'redux/actions'

class NewPost extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      content: '',
      category: 1,
      tags: []
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
            <span>栏目：</span>
            <ul>
              <li>
                <input type="radio" name="category" id="coding" value="1" defaultChecked onChange={this.updateCategory} />
                <label htmlFor="coding">代码</label>
              </li>
              <li>
                <input type="radio" name="category" id="creating" value="2" onChange={this.updateCategory} />
                <label htmlFor="creating">创作</label>
              </li>
              <li>
                <input type="radio" name="category" id="thoughts" value="3" onChange={this.updateCategory} />
                <label htmlFor="thoughts">杂谈</label>
              </li>
            </ul>
          </div>

          <div>
            <span>正文：</span>
            <textarea name="content" cols="50" rows="10" value={this.state.content} onChange={this.updateContent} />
          </div>

          <div>
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

  updateCategory = (e) => {
    this.setState({ category: parseInt(e.target.value, 10) })
  }

  updateContent = (e) => {
    this.setState({ content: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addPost(this.state.title, this.state.content, this.state.category)
  }
}

const mapToProps = state => ({
  isLoading: state.addPost.isLoading,
  msg: state.addPost.msg
})

export default connect(
  mapToProps, { addPost }
)(NewPost)
