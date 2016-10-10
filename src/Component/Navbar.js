import React, { Component } from 'react';
import DropdownMenu from './DropdownMenu';
import classname from 'classnames';
import {Link} from 'react-router';
import '../Stylesheets/Navbar.css';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: false,
      topics: false,
      jobs: false,
      remote: false
    }
  }

  componentDidMount() {
    this.handleClick(this.props.path)
  }

  handleChangeHide() {
    this.setState({ hide: false })
  }

  handleClick = (name) => {
    switch (name) {
      case "/topics":
        this.setState({ topics: true, jobs: false, remote: false })
        break
      case "/jobs":
        this.setState({ topics: false, jobs: true, remote: false })
        break
      case "/remote":
        this.setState({ topics: false, jobs: false, remote: true })
        break
      default:
        this.setState({ topics: false, jobs: false, remote: false })
    }
    this.setState({ hide: true })
  }

  render() {
    return (
      <div className='header'>
        <nav className="navbar navbar-default navbar-fixed-sm" role="navigation">
          <div className="container">
            <div className="navbar-header" id='navbar-header'>
              <button type="button" onClick={()=>this.handleChangeHide()} className="bs-navbar-collapse navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to='/' activeClassName="navbar-brand" onClick={() => this.handleClick('/')}>
                <b className='text-danger'>Ruby</b> China
              </Link>
            </div>

            <div className={classname("collapse", "navbar-collapse", { hide: this.state.hide })} id="bs-example-navbar-collapse-1">
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
      </div>
    );
  }
}
