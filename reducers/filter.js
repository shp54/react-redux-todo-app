export const filter = (filter, action) => {
	switch(action.type){
		case 'setVisibilityFilter':
			return action.filter
		default:
			return filter
	}
}
