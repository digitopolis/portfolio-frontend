import React from 'react'
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux'

class Filter extends React.Component {

	state = {
		search: ''
	}

	handleSubmit = () => {
		this.props.setFilter(this.state.search)
	}

	handleChange = (event) => {
		const search = event.target.value
		this.setState({ search })
	}

	render () {
		return (
			<div>
				<h3>Search by media:</h3>
				<Form onSubmit={this.handleSubmit}>
					<Form.Input
						icon='search'
						placeholder='Search artists'
						onChange={this.handleChange}
						value={this.state.search}
						/>
				</Form>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setFilter: (search) => dispatch({type: 'FILTER_ARTISTS', payload: search})
	}
}

export default connect(null, mapDispatchToProps)(Filter);
