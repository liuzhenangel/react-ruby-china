import React, { Component } from 'react';
import {Link} from 'react-router';
import TopicInfo from './TopicInfo';
import '../Stylesheets/Lists.css';

export default class Lists extends Component {
  render() {
    let listItems = this.props.topics.map(function (topic) {
      return (
        <div className="media topic" key={topic.id}>
          <a className="media-left" href="#">
            <img className='img-circle img-width-50' src={topic.user.avatar_url} role="presentation" />
          </a>
          <div className="media-body">
            <Link to={`/topics/${topic.id}`} className='title'>{topic.title}</Link>
            <TopicInfo topic={topic}></TopicInfo>

          </div>
          <div className='media-right count'>
            <span className='badge'>{topic.replies_count}</span>
          </div>
        </div>
      );
    });
    return(
      <div className='panel-body'>
        { listItems }
      </div>
    );
  }
}


