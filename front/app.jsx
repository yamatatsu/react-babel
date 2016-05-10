import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'

import reducers from 'reducers.js'
import actions from 'actions.js'

import Base from 'components/common/Base.jsx';
import Home from 'components/Home.jsx';
import ShopList from 'components/ShopList.jsx';
import Group from 'components/Group.jsx';

const store = createStore(reducers)
const history = syncHistoryWithStore(browserHistory, store)

history.listen(location => {
  switch (location.pathname) {
    case "/shopList":
      setTimeout(() => {
        store.dispatch(actions.fetchShop())
      }, 1000)
      // store.dispatch(actions.fetchShop())
  }
})

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Base}>
        <IndexRoute component={Home} />
        <Route path="home" component={Home} />
        <Route path="shopList" component={ShopList} />
        <Route path="group" component={Group} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('react-root')
);
