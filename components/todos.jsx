import React from 'react'
import { connect } from 'react-redux'

import NewTodo from './newTodo'
import { addTodo, deleteTodo } from '../actions'

const Todos = ({todos, dispatch}) => (
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
							textDecoration: todo.completed ? 'line-through' : 'none'
							}}>
						{todo.text}
						<button onClick={e => dispatch(deleteTodo(index))}>X</button>
						</p>
				)}
			</div>
		)

function mapStateToProps(state) {
  return { todos: state.get('todos').toJS() }
}

export default connect(mapStateToProps)(Todos)