import React from 'react'
import { LOGIN } from '../apiEndpoints'
import { Form, Segment } from 'semantic-ui-react'

class Login extends React.Component {

	state = {
		username: '',
		password: ''
	}

	handleChange = (event) => {
		const target = event.target
		const value = target.value
		const name = target.name

		this.setState({ [name]: value })
	}

	handleSubmit = () => {
		const payload = this.state
		fetch(LOGIN, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: JSON.stringify(payload)
		}).then(res => res.json())
		.then(res => {
			res.message ? alert(res.message) : console.log(res)
		})
	}

	render () {
		return (
			<div className='centered'>
				<Segment
					className='login'
					style={{backgroundColor: '#eaeaea'}}>
					<h1>log in!</h1>
					<Form
						onSubmit={this.handleSubmit}>
						<Form.Input
							name='username'
							label='Username'
							placeholder='Username'
							value={this.state.username}
							onChange={this.handleChange} />
						<Form.Input
							name='password'
							label='Password'
							placeholder='Password'
							type='password'
							value={this.state.password}
							onChange={this.handleChange} />
						<Form.Button>Submit</Form.Button>
					</Form>
				</Segment>
			</div>
		)
	}
}

export default Login;
