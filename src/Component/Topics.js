import React, { Component } from 'react';
import Paginate from './Paginate';
import {Link} from 'react-router';
import Lists from './Lists';

export default class Topics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: this.props.location.query.type||'last_actived',
    }
    this.props.actions.fetchTopics({type: this.state.type})
  }

  handleClick = (type) => {
    this.setState({type: type})
    this.props.actions.fetchTopics({type: type})
  }

  render() {
    return (
      <div className='panel panel-default topic-lists'>
        <div className='panel-heading text-right'>
          <span className='separator light-gray-color'>查看:</span>
          <Link to='/topics' onClick={() => this.handleClick('last_actived')}>默认</Link>
          <span className='separator'>/</span>
          <span className='glyphicon glyphicon-heart right' title='精华帖'></span>
          <Link to='/topics?type=excellent' onClick={() => this.handleClick('excellent')}>优质帖子</Link>
          <span className='separator'>/</span>
          <Link to='/topics?type=no_reply' onClick={() => this.handleClick('no_reply')}>无人问津</Link>
          <span className='separator'>/</span>
          <Link to='/topics?type=recent' onClick={() => this.handleClick('recent')}>最新创建</Link>
        </div>
        <Lists topics={this.props.results.topics} />
        <Paginate actions={this.props.actions} options={{type: this.state.type}}/>
      </div>
    );
  }
}
