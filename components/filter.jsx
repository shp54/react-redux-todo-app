import React from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'

const Filter = ({dispatch}) => (
	<div>
		<button onClick={() => dispatch(setVisibilityFilter('SHOW_ALL'))}>Show All</button>
		<button onClick={() => dispatch(setVisibilityFilter('SHOW_ACTIVE'))}>Show Active</button>
	</div>
)

export default connect()(Filter)