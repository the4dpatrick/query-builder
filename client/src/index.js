import React from 'react'
import ReactDOM from 'react-dom'
import {
  Router,
  Route,
  IndexRoute,
  hashHistory
} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import './index.css'

const store = configureStore()
const history = syncHistoryWithStore(hashHistory, store)

// Containers
import App from './containers/App'
import QueryBuilder from './containers/QueryBuilder'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={QueryBuilder} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
