import React, { Component } from 'react';
import DropdownMenu from './DropdownMenu';
import {Link} from 'react-router';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default" role="navigation">
        <div className="container-fluid container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to='/' activeClassName="navbar-brand">
              <b className='text-danger'>Ruby</b> China
            </Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="">
                <Link to="/topics">社区</Link>
              </li>
              <li className="">
                <Link to="/jobs">招聘</Link>
              </li>
              <li className="">
                <Link to="/remote">远程工作</Link>
              </li>
              <li><a href="https://gems.ruby-china.org/" target='_blank'>Gems</a></li>
            </ul>
            <DropdownMenu></DropdownMenu>
          </div>
        </div>
      </nav>
    );
  }
}
