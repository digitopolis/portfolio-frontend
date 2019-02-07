import React from 'react'
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

	render () {
		return (
			<div className='centered'>
				<Segment
					className='login'
					style={{backgroundColor: '#eaeaea'}}>
					<h1>log in!</h1>
					<Form>
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
