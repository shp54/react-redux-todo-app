import React from 'react'
import { connect } from 'react-redux'
import NewTodo from './newTodo'
import TodoList from './todoList'
import Filter from './filter'
import { addTodo, toggleTodo } from '../actions'

const Todos = ({todos, filter, dispatch}) => (
			<div>
				<h1>Todos</h1>
				<NewTodo onChange={e => {
					if(e.keyCode == 13){
						dispatch(addTodo(e.target.value))
						e.target.value = ''
					}
				}} />
				<TodoList todos={(filter != 'SHOW_ACTIVE' ? todos : todos.filter((t) => !t.completed))} 
						  onTodoClick={(index) => dispatch(toggleTodo(index))} />
				<Filter />
			</div>
		)

function mapStateToProps(state) {
  return { 
	todos: state.get('todos').toJS(),
	filter: state.get('filter')
  }
}

export default connect(mapStateToProps)(Todos)