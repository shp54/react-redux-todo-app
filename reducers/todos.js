import Immutable from 'immutable'

export default (state = Immutable.fromJS([{text: 'Code More!', completed: false}]), action) => {
	switch(action.type){
		case 'addTodo':
			return state.push(Immutable.Map({text: action.text, completed: false}))
		case 'deleteTodo':
			return state.setIn([action.index, 'completed'], true)
		default:
			return state
	}
}