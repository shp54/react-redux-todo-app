import Immutable from 'immutable'

export const todos = (todos, action) => {
	switch(action.type){
		case 'addTodo':
			return todos.push(Immutable.Map({text: action.text, completed: false}))
		case 'toggleTodo':
			return todos.updateIn([action.index, 'completed'], val => !val)
		default:
			return todos
	}
}