import React, { Component } from 'react';

export default class Promote extends Component {
  render() {
    return(
      <div className='panel panel-default'>
        <div className='panel-body'>
          推广
        </div>
        <ul className="list-group">
          <li className="list-group-item">
            <a href='http://ruby-china.liuzhen.me' target='_blank'>RubyChina 克隆 | React.js</a>
          </li>
          <li className="list-group-item">
            <a href='http://v2ex.liuzhen.me' target='_blank'>V2EX 克隆 | Vue.js</a>
          </li>
          <li className="list-group-item">
            <a href='http://liuzhen.me' target='_blank'>Rina's Blog</a>
          </li>
          <li className="list-group-item">
            <a href='http://ecssz.com/' target='_blank'>ECS</a>
          </li>
          <li className="list-group-item">
            <a href='https://github.com/liuzhenangel/react-ruby-china' target='_blank'>RubyChina Clone Github</a>
          </li>
          <li className="list-group-item">
            <a href='https://github.com/liuzhenangel/v2ex_frontend' target='_blank'>V2EX Clone Github</a>
          </li>
          <li className="list-group-item">
            <a href='https://github.com/liuzhenangel' target='_blank'>Rina's GitHub</a>
          </li>
        </ul>
      </div>
    );
  }
}
