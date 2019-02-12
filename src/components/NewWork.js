import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { WORKS } from '../apiEndpoints'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

class NewWork extends React.Component {

	state = {
		title: '',
		media: '',
		year: 0,
		img_url: '',
		statement: '',
		submitted: false
	}

	handleChange = (event) => {
		const target = event.target
		const value = target.value
		const name = target.name

		this.setState({ [name]: value })
	}

	handleSubmit = () => {
		const {submitted, ...data} = this.state
		const workInfo = {...data, artist_id: this.props.artist}
		fetch(WORKS, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: JSON.stringify(workInfo)
		}).then(res => res.json())
		.then(work => this.props.addWork(work))
		.then(this.setState({submitted: true}))

	}

	handleCancel = () => {
		this.setState({
			submitted: true
		})
	}

	render () {
		if (this.state.submitted) {
			return <Redirect to='/profile'/>
		}
		return (
			<Form
				size='big'
				onSubmit={this.handleSubmit}>
				<Form.Input
					name='title'
					label='Title'
					placeholder='Title'
					onChange={this.handleChange}
				/>
				<Form.Group widths='equal'>
					<Form.Input
						name='media'
						label='Media'
						placeholder='Media'
						onChange={this.handleChange}
					/>
					<Form.Input
						name='year'
						label='Year of completion'
						placeholder='Year'
						onChange={this.handleChange}
					/>
				</Form.Group>
				<Form.Input
					name='img_url'
					label='Link to image'
					placeholder='Image URL'
					onChange={this.handleChange}
				/>
				<Form.TextArea
					name='statement'
					label='Statement'
					placeholder="Artist's statement or description of work, etc."
					onChange={this.handleChange}
				/>
				<Button type='submit'>Submit</Button>
				<Button
					secondary
					type='button'
					onClick={this.handleCancel}
				>
					Cancel
				</Button>
			</Form>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		artist: state.selectedArtist
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addWork: (work) => dispatch({type: 'ADD_WORK', payload: work})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewWork);
