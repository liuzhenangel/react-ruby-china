import React, { Component } from 'react';
import Markdown from './Markdown';

export default class newTopic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: this.props.code || "# 创建话题",
      time: new Date(),
      saveState: true
    };
  }

  render() {
    return (
      <Markdown code={this.state.code}/>
    );
  }
}
