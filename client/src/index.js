import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import './index.css';
import reducer from './reducers';

const store = createStore(reducer);

const routes =(
      <Router history={hashHistory}>
          <Route path='/' component={App}></Route>
      </Router>
);

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
);
