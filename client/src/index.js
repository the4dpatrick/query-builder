import React from 'react'
import ReactDOM from 'react-dom'
import {
  Router,
  Route,
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

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={App} path="/" />
    </Router>
  </Provider>,
  document.getElementById('root')
)
