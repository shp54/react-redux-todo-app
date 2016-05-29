import Immutable from 'immutable'
import { createStore } from 'redux'
import reducer from './reducers/index'

let initialState = Immutable.fromJS({
	filter: 'SHOW_ALL',
	todos: [
		{text: 'Code More!', completed: false}
	]
})

export default createStore(reducer, initialState, window.devToolsExtension && window.devToolsExtension())