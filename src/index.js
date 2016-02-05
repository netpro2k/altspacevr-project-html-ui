import 'css-wipe'
import '../style/base.css'
import '../style/inputs.css'
import '../style/spaces-list.css'
import '../style/spaces-edit.css'
import '../style/user-selector.css'
import '../style/responsive.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import promiseMiddleware from 'redux-promise'

import reducers from './reducers'
import routes from './routes.js'

const createStoreWithMiddleware = compose(
  applyMiddleware(promiseMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

import {Router, browserHistory} from 'react-router'

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'))
