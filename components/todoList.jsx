import React from 'react'
import Todo from './todo'

const TodoList = ({todos, onTodoClick}) => (
	<div>
	{todos.map((todo, index) => 
		<Todo todo={todo} index={index} key={index} onTodoClick={onTodoClick} />
	)}
	</div>
)

export default TodoList