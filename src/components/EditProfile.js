import React from 'react'
import { Form, Segment } from 'semantic-ui-react'
import { ARTISTS } from '../apiEndpoints'
import { connect } from 'react-redux'

class EditProfile extends React.Component {

	state = {
		name: '',
		location: '',
		media: '',
		bio: '',
		img_url: '',
		twitter: '',
		instagram: '',
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
		const jwt = localStorage.getItem('jwt')
		fetch(`${ARTISTS}/${this.props.artist.id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				'Authorization': `Bearer ${jwt}`
			},
			body: JSON.stringify(data)
		}).then(res => res.json())
		.then(this.handleResponse)
	}

	handleResponse = (res) => {
		console.log(res);
	}

	render () {
		const artist = this.props.artist
		return (
			<Segment>
				<h3>Edit your profile, {artist.username}</h3>
				<Form onSubmit={this.handleSubmit}>
					<Form.Group widths='equal'>
						<Form.Input
							name='name'
							label='Name'
							placeholder={artist.name}
							onChange={this.handleChange}
						/>
						<Form.Input
							name='img_url'
							label='Profile Picture'
							placeholder={artist.img_url}
							onChange={this.handleChange}
						/>
					</Form.Group>
					<Form.Group widths='equal'>
						<Form.Input
							name='location'
							label='Location'
							placeholder={artist.location}
							onChange={this.handleChange}
						/>
						<Form.Input
							name='media'
							label='Primary Media'
							placeholder={artist.media}
							onChange={this.handleChange}
						/>
					</Form.Group>
					<Form.Group widths='equal'>
						<Form.Input
							name='twitter'
							label='Twitter account'
							placeholder={artist.twitter}
							onChange={this.handleChange}
						/>
						<Form.Input
							name='instagram'
							label='Instagram account'
							placeholder={artist.instagram}
							onChange={this.handleChange}
						/>
					</Form.Group>
					<Form.TextArea
						name='bio'
						label='Bio'
						placeholder={artist.bio}
						onChange={this.handleChange}
					/>
				<Form.Button>Submit</Form.Button>
				</Form>
			</Segment>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		artist: state.artists.find(a => a.id === state.currentUser.id)
	}
}

export default connect(mapStateToProps)(EditProfile);
