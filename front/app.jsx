import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistory, routeReducer } from 'redux-simple-router'

import reducer from 'reducers.js'
import Base from 'components/common/Base.jsx';
import Home from 'components/Home.jsx';
import ShopList from 'components/ShopList.jsx';
import Group from 'components/Group.jsx';

// Sync dispatched route actions to the history
const reduxRouterMiddleware = syncHistory(browserHistory)
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore)

const store = createStoreWithMiddleware(reducer)

reduxRouterMiddleware.listenForReplays(store)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Base}>
        <IndexRoute component={Home} />
        <Route path="home" component={Home} />
        <Route path="person" component={Person} />
        <Route path="group" component={Group} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('react-root')
);
