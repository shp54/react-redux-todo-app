import Immutable from 'immutable'

export const todos = (todos, action) => {
	switch(action.type){
		case 'addTodo':
			return todos.push(Immutable.Map({text: action.text, completed: false}))
		case 'deleteTodo':
			return todos.setIn([action.index, 'completed'], true)
		default:
			return todos
	}
}