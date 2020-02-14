import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';

import { PostContent } from 'containers'
import { addPost } from 'redux/actions'

class NewPost extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      id: 0,
      title: '',
      content: '',
      category: 1,
      tags: []
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.match.params.postID && props.initialValues && state.id !== props.initialValues.id) {
      console.log(1)
      return props.initialValues
    } else {
      console.log(2)
      return null
    }
  }

  render() {
    console.log(this.state)
    return (
      <>
        <form>
          <div>
            <span>标题：</span>
            <Field component="input" type="text" name="title" value={this.state.title} onChange={this.updateTitle} />
          </div>

          <div>
            <span>栏目：</span>
            <ul>
              <li>
                <Field component="input" type="radio" name="category" id="coding" value="1" checked={this.state.category === 1} onChange={this.updateCategory} />
                <label htmlFor="coding">代码</label>
              </li>
              <li>
                <Field component="input" type="radio" name="category" id="creating" value="2" checked={this.state.category === 2} onChange={this.updateCategory} />
                <label htmlFor="creating">创作</label>
              </li>
              <li>
                <Field component="input" type="radio" name="category" id="thoughts" value="3" checked={this.state.category === 3} onChange={this.updateCategory} />
                <label htmlFor="thoughts">杂谈</label>
              </li>
            </ul>
          </div>

          <div>
            <span>正文：</span>
            <Field component="textarea" name="content" cols="50" rows="10" value={this.state.content} onChange={this.updateContent} />
          </div>

          <div>
            <span>正文预览：</span>
            <PostContent content={this.state.content} />
          </div>

          <div>
            <span>{this.props.msg}</span>
            <input type="submit" value="保存到草稿箱" onClick={this.handleSave} />
            <input type="submit" value="发布" onClick={this.handleAddPost} />
          </div>
        </form>
        {this.props.isAdding ? <div>操作中...</div> : null}
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

  handleSave = (e) => {
    e.preventDefault()
    this.props.addPost('draft', this.state.title, this.state.content, this.state.category)
  }

  handleAddPost = (e) => {
    e.preventDefault()
    this.props.addPost('post', this.state.title, this.state.content, this.state.category)
  }
}

NewPost = reduxForm({
  form: 'editPost',
  enableReinitialize: true
})(NewPost)

const mapToProps = state => ({
  isAdding: state.addPost.isLoading,
  msg: state.addPost.msg,
  initialValues: state.post.data
})

export default connect(
  mapToProps, { addPost }
)(NewPost)
