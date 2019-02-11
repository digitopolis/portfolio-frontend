import React from 'react'
import { Form, Segment, Button } from 'semantic-ui-react'
import { ARTISTS } from '../apiEndpoints'
import { Redirect } from 'react-router'
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
		let updatedData = {}
		for (var attribute in data) {
			if (data[attribute] !== '') {
				updatedData[attribute] = data[attribute]
			}
		}
		const jwt = localStorage.getItem('jwt')
		fetch(`${ARTISTS}/${this.props.artist.id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				'Authorization': `Bearer ${jwt}`
			},
			body: JSON.stringify(updatedData)
		}).then(res => res.json())
		.then(this.handleResponse)
	}

	handleResponse = (res) => {
		console.log(res);
		if (res.artist) {
			this.props.updateArtist(res.artist)
			this.setState({
				submitted: true
			})
		}
	}

	handleCancel = () => {
		this.setState({
			submitted: true
		})
	}

	render () {
		const artist = this.props.artist
		if (this.state.submitted) {
			return <Redirect to='/profile' />
		}
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
				<Button type='submit'>Submit</Button>
				<Button
					secondary
					type='button'
					onClick={this.handleCancel}
				>
					Cancel
				</Button>
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

const mapDispatchToProps = (dispatch) => {
	return {
		updateArtist: (artist) => dispatch({type: 'UPDATE_ARTIST', payload: artist})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
