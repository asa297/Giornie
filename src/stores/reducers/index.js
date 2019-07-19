import { combineReducers } from 'redux'
import { AUTH_MODULE } from '@stores/types'
import { routerReducer } from 'react-router-redux'
import authReducer from './authReducer'

export const rootReducers = combineReducers({
  [AUTH_MODULE]: authReducer,
  routing: routerReducer,
})
