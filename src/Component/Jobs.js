import React, { Component } from 'react';
import {Link} from 'react-router';
import Lists from './Lists';

export default class Jobs extends Component {
  constructor(props) {
    super(props);
    // node_id: 25 是招聘节点
    this.props.actions.fetchTopics({node_id: 25})
  }

  render() {
    const count = this.props.results.topics.length
    return (
      <div className='panel panel-default topic-lists'>
        <div className='panel-heading'>
          <strong>招聘</strong>
          <span>共有 {count} 个讨论主题</span>
          <div className='summary'>
            <p>
              <strong className='light-gray-color'>招聘栏目规则：</strong>
              《
              <Link to='/topics/25579'>敬告各位发招聘的公司注意！</Link>
              》请仔细阅读!
            </p>
            <hr />
            <p className='light-gray-color'>如果没有发帖权限，请邮件联系 <a href='mailto:admin@ruby-china.org'>admin@ruby-china.org </a>并注明主题：请开通发布招聘帖权限</p>
          </div>
        </div>
        <Lists topics={this.props.results.topics} />
        <div className='panel-footer'>
        </div>
      </div>
    );
  }
}
