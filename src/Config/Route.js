import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Home from '../Component/Home';
import Topics from '../Component/Topics';
import Topic from '../Component/Topic';
import Jobs from '../Component/Jobs';
import Remote from '../Component/Remote';
import Programmer from '../Component/Programmer';
import newTopic from '../Component/newTopic';
import App from '../App';


const RouteConfig = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="topics" component={Topics}/>
      <Route path="topics?type=:name" component={Topics}/>
      <Route path="topics/new" component={newTopic}/>
      <Route path="topics/:id" component={Topic}/>
      <Route path="remote" component={Remote}/>
      <Route path="programmer" component={Programmer}/>
      <Route path="jobs" component={Jobs}/>
      <Route path="sites" component={Jobs}/>
    </Route>
  </Router>
);

export default RouteConfig;
