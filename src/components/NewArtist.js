import React from 'react'
import { Segment, Form } from 'semantic-ui-react'
import { ARTISTS } from '../apiEndpoints'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'


class NewArtist extends React.Component {

	state = {
		name: '',
		location: '',
		media: '',
		bio: '',
		img_url: '',
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
		fetch(ARTISTS, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: JSON.stringify(data)
		}).then(res => res.json())
		.then(artist => this.props.addArtist(artist))
		.then(this.setState({submitted: true}))

	}

	render () {
		if (this.state.submitted) {
			return <Redirect to='/' />
		}
		return (
			<Segment>
				<Form onSubmit={this.handleSubmit}>
					<Form.Group widths='equal'>
						<Form.Input
							name='name'
							label='Name'
							placeholder='Name'
							onChange={this.handleChange}
						/>
						<Form.Input
							name='img_url'
							label='Profile Picture'
							placeholder='Image URL'
							onChange={this.handleChange}
						/>
					</Form.Group>
					<Form.Group widths='equal'>
						<Form.Input
							name='location'
							label='Location'
							placeholder='Location'
							onChange={this.handleChange}
						/>
						<Form.Input
							name='media'
							label='Primary Media'
							placeholder='List favored media'
							onChange={this.handleChange}
						/>
					</Form.Group>
					<Form.TextArea
						name='bio'
						label='Bio'
						placeholder='Information about you, your process, etc..'
						onChange={this.handleChange}
					/>
				<Form.Button>Submit</Form.Button>
				</Form>
			</Segment>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addArtist: (artist) => dispatch({type: 'ADD_ARTIST', payload: artist})
	}
}

export default connect(null, mapDispatchToProps)(NewArtist);
