import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import mySaga from './saga'
import App from '../src/App'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
     rootReducer,
    compose(applyMiddleware(sagaMiddleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) 
     )

     sagaMiddleware.run(mySaga)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

