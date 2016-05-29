export function addTodo(text){
	return {
		type: 'addTodo',
		text
	}
}

export function toggleTodo(index){
	return {
		type: 'toggleTodo',
		index
	}
}

export function setVisibilityFilter(filter){
	return {
		type: 'setVisibilityFilter',
		filter
	}
}