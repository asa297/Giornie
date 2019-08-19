import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import createSagaMiddleware from 'redux-saga'
import { logger } from 'redux-logger'

import { rootReducers } from '@stores/reducers'
import { rootSaga } from '@stores/sagaes'
import { FirebaseAuthProvider } from '@components/firebase-provider'
import { Router } from 'react-router'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import { createBrowserHistory } from 'history'
import { ThemeProvider } from 'styled-components'
import { theme } from '@helpers/theme'

import 'antd/dist/antd.css'

const myhistory = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()
const myRouterMiddleware = routerMiddleware(myhistory)

const store = createStore(rootReducers, applyMiddleware(sagaMiddleware, myRouterMiddleware, logger))

const history = syncHistoryWithStore(myhistory, store)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <FirebaseAuthProvider>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    </ThemeProvider>
  </FirebaseAuthProvider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

export { store }
