import Immutable from 'immutable'

export default (state, action) => {
	switch(action.type){
		case 'addTodo':
			return state.set('todos', state.get('todos').push(Immutable.Map({text: action.text, completed: false})))
		case 'deleteTodo':
			return state.set('todos', state.get('todos').setIn([action.index, 'completed'], true))
		default:
			return state
	}
}