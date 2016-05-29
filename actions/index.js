export function addTodo(text){
	return {
		type: 'addTodo',
		text
	}
}

export function deleteTodo(index){
	return {
		type: 'deleteTodo',
		index
	}
}