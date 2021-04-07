import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import { LinkList } from 'containers'

import './index.css'

export default class Footer extends PureComponent {
  render() {
    return (
      <footer className="footer">
        <span>Links |<LinkList /></span>
        <span><Link to="/">Purple4pur</Link> <i className="far fa-copyright"></i> 2020 - 2021 | <Link to="/admin">CMS</Link></span>
        <span>
          <a href="http://www.beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">粤ICP备19158409号-1</a>
        </span>
      </footer>
    )
  }
}
