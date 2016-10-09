import React, { Component, PropTypes, cloneElement } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './Action'
import Navbar from './Component/Navbar';
//import Footer from './Component/Footer';
import Promote from './Component/Promote';

class App extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired
  }
  render() {
    let layout = ''
    const childrenWithProps = React.Children.map(this.props.children,
        (child) => cloneElement(child, {
          actions: this.props.actions,
          results: this.props.results
        })
        )

    let pathname = this.props.location.pathname

    if (pathname === '/programmer' || pathname==='/'){
      layout = <div className='container'>
                <div className='row'>
                  {childrenWithProps}
                </div>
               </div>
    } else if (pathname === '/topics/new'){
      layout = <div>
                {childrenWithProps}
               </div>
    } else {
      layout = <div className='container'>
                <div className='row'>
                  <div className='col-md-9'>
                    {childrenWithProps}
                  </div>
                  <div className='col-md-3'>
                    <Promote />
                  </div>
                </div>
               </div>
    }
    return (
      <div>
        <Navbar path={this.props.location.pathname}/>
        { layout }
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})

const mapStateToProps = state => {
  const { postsByReddit } = state
  let replies = [], topics = [], topic = {}, results = postsByReddit['results']
  if (results) {
    switch (results.type) {
      case actions.TOPIC:
        topic = results.topic
        replies = results.replies
        break
      case actions.TOPICS:
        topics = results.topics
        break
      default:
        {}
    }
  }
  return {
    results: {
      replies,
      topics,
      topic
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
