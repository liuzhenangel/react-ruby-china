import React, { Component } from 'react';
import Lists from './Lists';

export default class Topics extends Component {
  render() {
    const length = this.props.topics.length
    return (
      <div className='panel panel-default topic-lists'>
        <div className='panel-heading'>
          社区精华帖
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <Lists topics={this.props.topics.splice(0, length/2)} />
          </div>
          <div className='col-md-6'>
            <Lists topics={this.props.topics} />
          </div>
        </div>
      </div>
    );
  }
}
