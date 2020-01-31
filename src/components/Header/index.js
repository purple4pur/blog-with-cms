import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
      hoverClass5: ''
    }
    this.toggleMenu = this.toggleMenu.bind(this)
    this.handleOver1 = this.handleOver1.bind(this)
    this.handleOver2 = this.handleOver2.bind(this)
    this.handleOver3 = this.handleOver3.bind(this)
    this.handleOver4 = this.handleOver4.bind(this)
    this.handleOver5 = this.handleOver5.bind(this)
    this.handleOut = this.handleOut.bind(this)
  }

  toggleMenu() {
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

  handleOver1() {
    this.setState({
      hoverClass1: ' hover'
    })
  }
  handleOver2() {
    this.setState({
      hoverClass2: ' hover'
    })
  }
  handleOver3() {
    this.setState({
      hoverClass3: ' hover'
    })
  }
  handleOver4() {
    this.setState({
      hoverClass4: ' hover'
    })
  }
  handleOver5() {
    this.setState({
      hoverClass5: ' hover'
    })
  }

  handleOut() {
    this.setState({
      hoverClass1: '',
      hoverClass2: '',
      hoverClass3: '',
      hoverClass4: '',
      hoverClass5: ''
    })
  }

  render() {
    return (
      <header>
        <div class="header-ui">
          <span onClick={this.toggleMenu}><i class="fas fa-bars"></i></span>
          <Link to="/"><img src={logo} alt="Purple4pur's Blog" /></Link>
        </div>
        <nav className={'header-nav' + this.state.navClass}>
          <div class="header-nav-bg-touch" onClick={this.toggleMenu}></div>
          <ul>

            <li>
              <Link to="/" class="header-nav-mobile">首页 | HOME</Link>
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
              <Link to="/coding" class="header-nav-mobile">代码 | CODING</Link>
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
              <Link to="/creating" class="header-nav-mobile">创作 | CREATING</Link>
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
              <Link to="/thoughts" class="header-nav-mobile">杂谈 | THOUGHTS</Link>
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
              <Link to="/about" class="header-nav-mobile">关于 | ABOUT</Link>
              <Link to="/about"
                className={'header-nav-desktop' + this.state.hoverClass5}
                onMouseOver={this.handleOver5}
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
