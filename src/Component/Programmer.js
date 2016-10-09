import React, { Component } from 'react';
import Markdown from './Markdown';

export default class Programmer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: this.props.code || "# 个人简历",
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
