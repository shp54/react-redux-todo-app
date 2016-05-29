import Immutable from 'immutable'
import { todos } from './todos'
import { filter } from './filter'

export default (state, action) => {
	return Immutable.fromJS({ 
		todos: todos(state.get('todos'), action),
		filter: filter(state.get('filter'), action) 
	})
}