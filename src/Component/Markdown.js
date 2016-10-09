import React, { Component } from 'react';
import Editor from 'react-md-editor';
import marked from 'marked';

import '../Stylesheets/Editor.css';

export default class Markdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: this.props.code || "# Markdown",
      time: new Date(),
      saveState: true
    };
  }

  updateCode(newCode) {
    this.setState({ code: newCode, saveState: false });
    let min = (new Date().getTime() - this.state.time.getTime()) / 1000
    if (min > 2) {
      this.setState({time: new Date()});
      let interval = setInterval(() => {
        this.saveData();
        clearInterval(interval);
      }, 4000);
    }
  }

  saveData() {
    console.log(this.state.code);
    this.setState({ saveState: true, time: new Date() });
  }

  render() {
    let preview = marked(this.state.code);
    let saveText = this.state.saveState ? '已保存' : '未保存'
    return (
      <div className='markdown clearfix'>
        <div className='now'>
          <div className='col-md-6'>
            <div className='editer'>
              <span className={`pull-right save-state ${this.state.saveState}`}>{saveText}</span>
              <Editor value={this.state.code} onChange={this.updateCode.bind(this)} />
            </div>
          </div>
          <div className='col-md-6'>
            <div className="preview" dangerouslySetInnerHTML={{__html: preview}} />
          </div>
        </div>
      </div>
    );
  }
}
