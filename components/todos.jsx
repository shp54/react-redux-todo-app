import React from 'react'
import { connect } from 'react-redux'

import NewTodo from './newTodo'
import Filter from './filter'
import { addTodo, deleteTodo } from '../actions'

const Todos = ({todos, filter, dispatch}) => (
			<div>
				<h1>Todos</h1>
				<NewTodo onChange={e => {
					if(e.keyCode == 13){
						dispatch(addTodo(e.target.value))
						e.target.value = ''
					}
				}} />
				{todos.map((todo, index) => 
						<p key={index}
							style={{
							textDecoration: todo.completed ? 'line-through' : 'none',
							display: todo.completed && filter == 'SHOW_ACTIVE' ? 'none' : 'block'
							}}>
						{todo.text}
						<button onClick={e => dispatch(deleteTodo(index))}>X</button>
						</p>
				)}
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