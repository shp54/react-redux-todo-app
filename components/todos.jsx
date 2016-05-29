import React from 'react'
import { connect } from 'react-redux'
import NewTodo from './newTodo'
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
				{(filter != 'SHOW_ACTIVE' ? todos : todos.filter((t) => !t.completed))
				.map((todo, index) => 
						<p key={index}
							style={{
							textDecoration: todo.completed ? 'line-through' : 'none'
						}}>
						{todo.text}
						<button onClick={e => dispatch(toggleTodo(index))}>X</button>
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