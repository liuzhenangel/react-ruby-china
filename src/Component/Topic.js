import React, { Component } from 'react';
import TopicInfo from './TopicInfo';
import Replies from './Replies';
import '../Stylesheets/Markdown.css';

export default class Topic extends Component {
  componentDidMount() {
    this.props.actions.fetchTopic(this.props.params.id)
  }

  render() {
    const isEmpty = !this.props.results.topic.title
    return (
      <div className='wrap'>
        { !isEmpty &&
          <div className='panel panel-default topic-wrap'>
            <div className='panel-heading media'>
              <div className='media-body'>
                <h4>{this.props.results.topic.title}</h4>
                <TopicInfo topic={this.props.results.topic} isShow='true'></TopicInfo>
              </div>
              <a className="media-right" href="#">
                <img className='img-circle img-width-50' src={this.props.results.topic.user.avatar_url} role='presentation'/>
              </a>
            </div>
            <div className='panel-body markdown'>
              <span dangerouslySetInnerHTML={{ __html: this.props.results.topic.body_html}} />
            </div>
            <div className='panel-footer'>
            </div>
          </div>
        }
        { isEmpty && <h2>Loading...</h2> }
        <Replies replies={this.props.results.replies} />
      </div>
    );
  }
}
