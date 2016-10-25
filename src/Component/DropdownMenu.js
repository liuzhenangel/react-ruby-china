import React, { Component } from 'react';
import classname from 'classnames';
import {Link} from 'react-router';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      menuopen: false
    }
  }

  toggleDropdown() {
    this.setState({ open: ! this.state.open })
  }

  toggleDropdownMenu() {
    this.setState({ menuopen: ! this.state.menuopen })
  }

  handleClick = (name) => {
    this.props.onClick()
    switch (name) {
      case "/topics/new":
        this.setState({ open: false })
        break
      default:
        this.setState({ open: false, menuopen: false })
    }
  }

  render() {
    return (
      <ul className="nav navbar-nav navbar-right hidden-xs">
        <li><a href="#"><span className='glyphicon glyphicon-bell'></span></a></li>
        <li className={classname("dropdown", {open: this.state.open})}>
          <a onClick={()=>this.toggleDropdown()} className="dropdown-toggle">
            <span className="glyphicon glyphicon-plus"></span>
            <span className="caret"></span>
          </a>
          <ul className="dropdown-menu" role="menu">
            <li><Link to="/topics/new" onClick={() => this.handleClick('/topics/new')}>发布新话题</Link></li>
          </ul>
        </li>
        <li className={classname("dropdown", {open: this.state.menuopen})}>
          <a onClick={()=>this.toggleDropdownMenu()} className="dropdown-toggle">Name<span className="caret"></span></a>
          <ul className="dropdown-menu" role="menu">
            <li><a href="#" onClick={() => this.handleClick('#')}>个人资料设置</a></li>
            <li><a href="#" onClick={() => this.handleClick('#')}>个人简历</a></li>
            <li><a href="#" onClick={() => this.handleClick('#')}>记事本</a></li>
            <li><a href="#" onClick={() => this.handleClick('#')}>我的收藏</a></li>
            <li><a href="#" onClick={() => this.handleClick('#')}>退出</a></li>
          </ul>
        </li>
      </ul>
    );
  }
}
