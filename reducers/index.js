import { combineReducers } from 'redux-immutable'
import { todos } from './todos'
import { filter } from './filter'

export default combineReducers({ todos, filter })