import React from 'react'
import { Segment, Form, Message, Icon } from 'semantic-ui-react'
import { ARTISTS } from '../apiEndpoints'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class NewArtist extends React.Component {

	state = {
		username: '',
		password: '',
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
		fetch(ARTISTS, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: JSON.stringify(data)
		}).then(res => res.json())
		.then(this.handleResponse)
		// .then(artist => this.props.addArtist(artist))
		// .then(this.setState({submitted: true}))

	}

	handleResponse = (res) => {
		console.log(res);
		if (res.artist) {
			this.props.addArtist(res.artist)
			this.props.loginUser(res.artist.id)
			localStorage.setItem('jwt', res.jwt)
			this.setState({
				submitted: true
			})
		}
	}

	render () {
		if (this.state.submitted) {
			return <Redirect to='/profile' />
		}
		return (
			<Segment>
				<Form size='big' onSubmit={this.handleSubmit}>
					<Form.Group widths='equal'>
						<Form.Input
							required
							name='username'
							label='Username'
							placeholder='Username'
							onChange={this.handleChange}
						/>
						<Form.Input
							required
							type='password'
							name='password'
							label='Password'
							placeholder='Password'
							onChange={this.handleChange}
						/>
					</Form.Group>
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
					<Form.Group widths='equal'>
						<Form.Input
							name='twitter'
							label='Twitter account'
							placeholder='Twitter account'
							onChange={this.handleChange}
						/>
						<Form.Input
							name='instagram'
							label='Instagram account'
							placeholder='Instagram account'
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
				<Message size='large' attached='bottom' warning>
					<Icon name='help' />
					Already signed up?&nbsp;<Link to='/login'>Login here</Link>&nbsp;instead.
				</Message>
			</Segment>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addArtist: (artist) => dispatch({type: 'ADD_ARTIST', payload: artist}),
		loginUser: (user) => dispatch({type: 'USER_LOGIN', payload: user})
	}
}

export default connect(null, mapDispatchToProps)(NewArtist);
