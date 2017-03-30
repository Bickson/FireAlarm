import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import reducers from '../Reducers'
import thunk from 'redux-thunk'

export default function () {
  return createStore(reducers, applyMiddleware(thunk, logger))
}
