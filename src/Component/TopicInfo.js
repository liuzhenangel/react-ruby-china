import React, { Component } from 'react';

export default class TopicInfo extends Component {

  render() {
    let info = ''
    let hits = ''
    if (this.props.isShow === 'true') {
      info = <span>发布于 { this.props.topic.created_at }</span>
      hits = <span>{this.props.topic.hits} 次阅读</span>
    }

    return(
      <div className='infos'>
        <span>{this.props.topic.node_name}</span>
          •
        <span>{this.props.topic.user.name}</span>
          •

        { this.props.topic.replied_at !== null ?
            <span>
              { info }
               最后由
              <span>{this.props.topic.last_reply_user_login}</span>
              回复于 {this.props.topic.replied_at}
            </span>
          :
            <span>发布于 { this.props.topic.created_at }</span>
        }
        { hits }
      </div>
    );
  }
}
