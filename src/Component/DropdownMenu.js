import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Home extends Component {
  render() {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#"><span className='glyphicon glyphicon-bell'></span></a></li>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">
            <span className="glyphicon glyphicon-plus"></span>
            <span className="caret"></span>
          </a>
          <ul className="dropdown-menu" role="menu">
            <li><Link to="/topics/new">发布新话题</Link></li>
          </ul>
        </li>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">Name<span className="caret"></span></a>
          <ul className="dropdown-menu" role="menu">
            <li><a href="#">个人资料设置</a></li>
            <li><a href="#">个人简历</a></li>
            <li><a href="#">记事本</a></li>
            <li><a href="#">我的收藏</a></li>
            <li><a href="#">退出</a></li>
          </ul>
        </li>
      </ul>
    );
  }
}
