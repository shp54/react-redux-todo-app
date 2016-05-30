import React from 'react'

const Todo = ({todo, index, onTodoClick}) => (
	<p key={index}
			style={{
			textDecoration: todo.completed ? 'line-through' : 'none'
		}}>
		{todo.text}
		<button onClick={() => onTodoClick(index)}>X</button>
		</p>
)

export default Todo