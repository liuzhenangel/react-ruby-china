import React, { Component } from 'react';
import '../Stylesheets/Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer text-right container'>
        <span className='link'>react.liuzhen</span>
        <span className='time'>© 2016</span>
        <div className='license'>
          Designed by
          <a target='_blank' href='http://liuzhen.me/about'>Rina</a>
        </div>
        <div className='license'>
          Built with
          <a target='_blank' href='https://github.com/liuzhenangel/react-ruby-china'>react-ruby-china</a>
        </div>
      </div>
    );
  }
}
