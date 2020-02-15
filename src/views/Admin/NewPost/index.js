import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';

import { PostContent } from 'containers'
import { addPost, fetchTags } from 'redux/actions'

class NewPost extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      id: 0,
      title: '',
      content: '',
      category: 1,
      tags: [],
      candidateTags: []
    }
  }

  componentDidMount() {
    this.props.fetchTags()
  }

  static getDerivedStateFromProps(props, state) {
    if (props.match.params.postID && props.initialValues && state.id !== props.initialValues.id) {
      return props.initialValues
    } else {
      return null
    }
  }

  render() {
    return (
      <>
        <form>
          <div className="edit-post-info" onKeyDown={e => { if (e.key === 'Enter') e.preventDefault() }}>
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
              <span>标签：</span>
              <ul>
                {
                  this.state.tags.map(tag => (
                    <li key={tag.id}>
                      <span>{tag.name}</span>
                      <i className="fas fa-times-circle" onClick={this.handleDelTag.bind(this, tag.id)}></i>
                    </li>
                  ))
                }
                <li>
                  <input type="text" name="tag-input" id="tag-input" placeholder="回车以添加标签" onKeyUp={this.handleAddTag} onChange={this.updateCandidateTags} autoComplete="off" />
                  <ul>
                    {
                      this.state.candidateTags.map(tag => (
                        <li key={tag.id} onClick={this.handleAddTag.bind(this, tag.name)}>{tag.name}</li>
                      ))
                    }
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="edit-post-content">
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
          </div>
        </form>
        {this.props.isAdding ? <div>操作中...</div> : null}
      </>
    )
  }

  updateTitle = e => {
    this.setState({ title: e.target.value })
  }

  updateCategory = e => {
    this.setState({ category: parseInt(e.target.value, 10) })
  }

  handleAddTag = e => {
    if (e.key && e.key !== 'Enter') return
    let tagName = undefined
    if (e.target) {
      tagName = e.target.value
    } else {
      tagName = e
    }
    if (/\s+/.test(tagName)) return
    let id = -this.state.tags.length
    for (let i in this.state.tags) {
      if (this.state.tags[i].name === tagName) {
        document.getElementById('tag-input').value = ""
        this.setState({ candidateTags: [] })
        return
      }
    }
    for (let i in this.props.existTags) {
      if (this.props.existTags[i].name === tagName) {
        id = parseInt(this.props.existTags[i].id)
        break
      }
    }
    this.setState({
      tags: [
        ...this.state.tags,
        { 'id': id, 'name': tagName }
      ],
      candidateTags: []
    })
    document.getElementById('tag-input').value = ""
  }

  updateCandidateTags = e => {
    if (e.target.value !== '') {
      let reg = new RegExp(e.target.value, "i")
      this.setState({
        candidateTags: this.props.existTags.filter(tag => (
          reg.test(tag.name)
        ))
      })
    } else {
      this.setState({ candidateTags: [] })
    }
  }

  handleDelTag = id => {
    this.setState({
      tags: this.state.tags.filter(tag => (tag.id !== id))
    })
  }

  updateContent = e => {
    this.setState({ content: e.target.value })
  }

  handleSave = e => {
    e.preventDefault()
    this.props.addPost('draft', this.state.title, this.state.content, this.state.category)
  }

  handleAddPost = e => {
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
  initialValues: state.post.data,
  existTags: state.tagList.tags
})

export default connect(
  mapToProps, { addPost, fetchTags }
)(NewPost)
