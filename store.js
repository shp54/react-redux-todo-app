import Immutable from 'immutable'
import { createStore } from 'redux'
import todos from './reducers/todos'

let initialState = Immutable.fromJS({
	todos: [
		{text: 'Code More!', completed: false}
	]
})

export default createStore(todos, initialState)