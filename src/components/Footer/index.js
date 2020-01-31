import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <span><i class="far fa-copyright"></i> Purple4pur | 2020</span>
        <span>
          <a href="http://www.beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">粤ICP备19158409号-1</a>
        </span>
      </footer>
    )
  }
}
