import React, { Component } from 'react';
import DropdownMenu from './DropdownMenu';
import classname from 'classnames';
import {Link} from 'react-router';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: false,
      jobs: false,
      remote: false
    }
  }

  componentDidMount() {
    this.handleClick(this.props.path)
  }

  handleClick = (name) => {
    switch (name) {
      case "/topics":
        this.setState({ topics: true, jobs: false, remote: false })
        break
      case "/jobs":
        this.setState({ topics: false, jobs: true, remote: false })
        break
      default:
        this.setState({ topics: false, jobs: false, remote: true })
    }
  }

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
              <li className={classname({active: this.state.topics})}>
               <Link to="/topics" onClick={() => this.handleClick('/topics')}>社区</Link>
              </li>
              <li className={classname({active: this.state.jobs})}>
                <Link to="/jobs" onClick={() => this.handleClick('/jobs')}>招聘</Link>
              </li>
              <li className={classname({active: this.state.remote})}>
                <Link to="/remote" onClick={() => this.handleClick('/remote')}>远程工作</Link>
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
