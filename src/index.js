import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import Route from './Config/Route';
import reducer from './Reducer'

import './index.css';

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)
ReactDOM.render(
  <Provider store={store}>
    {Route}
  </Provider>,
  document.getElementById('root')
);
