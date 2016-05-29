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

export default (state, action) => {
	switch(action.type){
		case 'addTodo':
		case 'deleteTodo':
			return state.set('todos', todos(state.get('todos'), action))
		default:
			return state
	}
}