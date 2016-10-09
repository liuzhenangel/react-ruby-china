import React, { Component } from 'react';
import Lists from './Lists';

export default class Remote extends Component {
  constructor(props) {
    super(props);
    this.props.actions.fetchTopics({node_id: 25, limit: 150})
  }

  render() {
    let remote = []
    this.props.results.topics.forEach(topic => {
      if (topic.title.includes('远程')) {
        remote.push(topic)
      }
    })
    const count = remote.length
    return (
      <div className='panel panel-default topic-lists'>
        <div className='panel-heading'>
          <strong>远程</strong>
          <span>共有 {count} 个招聘帖</span>
          <div className='summary'>
            <p>
              <strong className='light-gray-color'>远程规则：</strong>
              请在标题中注明: [ 远程 ]
            </p>
          </div>
        </div>
        <Lists topics={remote} />
      </div>
    );
  }
}
