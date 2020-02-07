import React, { PureComponent as Component } from 'react'
import { NavLink as Link } from 'react-router-dom'

import './index.css'
import logo from './logo.ico'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navClass: '',
      hoverClass1: '',
      hoverClass2: '',
      hoverClass3: '',
      hoverClass4: '',
      hoverClass5: '',
      hoverClass6: ''
    }
  }

  toggleMenu = () => {
    if (this.state.navClass === '') {
      this.setState({
        navClass: ' openMenu'
      })
    } else {
      this.setState({
        navClass: ''
      })
    }
  }

  handleOver1 = () => {
    this.setState({
      hoverClass1: ' hover'
    })
  }
  handleOver2 = () => {
    this.setState({
      hoverClass2: ' hover'
    })
  }
  handleOver3 = () => {
    this.setState({
      hoverClass3: ' hover'
    })
  }
  handleOver4 = () => {
    this.setState({
      hoverClass4: ' hover'
    })
  }
  handleOver5 = () => {
    this.setState({
      hoverClass5: ' hover'
    })
  }
  handleOver6 = () => {
    this.setState({
      hoverClass6: ' hover'
    })
  }

  handleOut = () => {
    this.setState({
      hoverClass1: '',
      hoverClass2: '',
      hoverClass3: '',
      hoverClass4: '',
      hoverClass5: '',
      hoverClass6: ''
    })
  }

  render() {
    return (
      <header>
        <div className="header-ui">
          <span onClick={this.toggleMenu}><i className="fas fa-bars"></i></span>
          <Link to="/"><img src={logo} alt="Purple4pur's Blog" /></Link>
        </div>
        <nav className={'header-nav' + this.state.navClass}>
          <div className="header-nav-bg-touch" onClick={this.toggleMenu}></div>
          <ul>

            <li>
              <Link to="/" className="header-nav-mobile">首页 | HOME</Link>
              <Link to="/"
                className={'header-nav-desktop' + this.state.hoverClass1}
                onMouseOver={this.handleOver1}
                onMouseOut={this.handleOut}
              >
                首页
                <div><span>HOME</span></div>
              </Link>
            </li>

            <li>
              <Link to="/coding" className="header-nav-mobile">代码 | CODING</Link>
              <Link to="/coding"
                className={'header-nav-desktop' + this.state.hoverClass2}
                onMouseOver={this.handleOver2}
                onMouseOut={this.handleOut}
              >
                代码
                <div><span>CODING</span></div>
              </Link>
            </li>

            <li>
              <Link to="/creating" className="header-nav-mobile">创作 | CREATING</Link>
              <Link to="/creating"
                className={'header-nav-desktop' + this.state.hoverClass3}
                onMouseOver={this.handleOver3}
                onMouseOut={this.handleOut}
              >
                创作
                <div><span>CREATING</span></div>
              </Link>
            </li>

            <li>
              <Link to="/thoughts" className="header-nav-mobile">杂谈 | THOUGHTS</Link>
              <Link to="/thoughts"
                className={'header-nav-desktop' + this.state.hoverClass4}
                onMouseOver={this.handleOver4}
                onMouseOut={this.handleOut}
              >
                杂谈
                <div><span>THOUGHTS</span></div>
              </Link>
            </li>

            <li>
              <Link to="/tags" className="header-nav-mobile">标签 | TAGS</Link>
              <Link to="/tags"
                className={'header-nav-desktop' + this.state.hoverClass5}
                onMouseOver={this.handleOver5}
                onMouseOut={this.handleOut}
              >
                标签
                <div><span>TAGS</span></div>
              </Link>
            </li>

            <li>
              <Link to="/about" className="header-nav-mobile">关于 | ABOUT</Link>
              <Link to="/about"
                className={'header-nav-desktop' + this.state.hoverClass6}
                onMouseOver={this.handleOver6}
                onMouseOut={this.handleOut}
              >
                关于
                <div><span>ABOUT</span></div>
              </Link>

            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
