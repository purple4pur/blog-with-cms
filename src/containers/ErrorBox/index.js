import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import './index.css'
import { resetErrorMsg } from 'redux/actions'

class ErrorBox extends PureComponent {
  render() {
    return (
      <div className="error-msgbox">
        <h3 className="error-title">
          <span>发生错误</span>
          <button onClick={this.handleClick}>
            <i className="fas fa-times"></i>
          </button>
        </h3>
        <p>{this.props.errMsg}</p>
        <p>
          Error {this.props.errCode} <a
            href="https://github.com/purple4pur/blog-with-cms/blob/master/error-code-table.md"
            target="_blank"
            rel="noopener noreferrer"
          >了解更多</a>
        </p>
      </div>
    )
  }

  handleClick = () => {
    this.props.resetErrorMsg()
  }
}

const mapToProps = state => ({
  errMsg: state.errorMsg.errMsg,
  errCode: state.errorMsg.errCode
})

export default connect(
  mapToProps, { resetErrorMsg }
)(ErrorBox)
