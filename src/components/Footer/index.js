import React, { PureComponent as Component } from 'react'
import { Link } from 'react-router-dom'

import './index.css'

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <span><i class="far fa-copyright"></i> <Link to="/about">Purple4pur</Link> | 2020</span>
        <span>
          <a href="http://www.beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">粤ICP备19158409号-1</a>
        </span>
      </footer>
    )
  }
}
