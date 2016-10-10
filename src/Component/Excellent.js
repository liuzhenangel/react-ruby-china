import React, { Component } from 'react';
import Lists from './Lists';

export default class Topics extends Component {
  render() {
    const length = this.props.topics.length
    return (
      <div className='panel panel-default no-margin-bottom-xs topic-lists reset-panel-xs'>
        <div className='panel-heading margin-xs'>
          社区精华帖
        </div>
        <div className='row reset-row-xs'>
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
