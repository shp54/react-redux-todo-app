import Immutable from 'immutable'

const todos = (todos, action) => {
	switch(action.type){
		case 'addTodo':
			return todos.push(Immutable.Map({text: action.text, completed: false}))
		case 'deleteTodo':
			return todos.setIn([action.index, 'completed'], true)
		default:
			return todos
	}
}

const filter = (filter, action) => {
	switch(action.type){
		case 'setVisibilityFilter':
			return action.filter
		default:
			return filter
	}
}

export default (state, action) => {
	return Immutable.fromJS({ 
		todos: todos(state.get('todos'), action),
		filter: filter(state.get('filter'), action) 
	})
}