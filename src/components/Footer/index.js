import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import { LinkList } from 'containers'

import './index.css'

export default class Footer extends PureComponent {
  render() {
    return (
      <footer className="footer">
        {/* <span>Links | <a href="https://ketchuppp.xyz/" target="_blank" rel="noopener noreferrer">KETCHUPPP</a></span> */}
        <span>Links |<LinkList /></span>
        <span><i className="far fa-copyright"></i> <Link to="/">Purple4pur</Link> | 2020 | <Link to="/admin">CMS</Link></span>
        <span>
          <a href="http://www.beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">粤ICP备19158409号-1</a>
        </span>
      </footer>
    )
  }
}
