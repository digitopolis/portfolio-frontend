import React from 'react'
import { LOGIN } from '../apiEndpoints'
import { Form, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

class Login extends React.Component {

	state = {
		username: '',
		password: '',
		message: '',
		loggedIn: false
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
			res.message ? this.showErrors(res.message) : this.handleLogin(res)
		})
	}

	handleLogin = (res) => {
		const user = res.user
		localStorage.setItem('jwt', res.jwt)
		this.props.loginUser(user.id)
		this.setState({
			message: '',
			loggedIn: !this.state.loggedIn
		})
	}

	showErrors = (message) => {
		this.setState({ message })
	}

	render () {
		if (this.state.loggedIn) {
			return <Redirect to='/profile'/>
		}
		return (
			<div className='centered'>
				<Segment
					className='login'
					style={{backgroundColor: '#eaeaea'}}>
					<h1>log in!</h1>
					{this.state.message === '' ? null : <h3>{this.state.message}</h3>}
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

const mapDispatchToProps = (dispatch) => {
	return {
		loginUser: (user) => dispatch({type: 'USER_LOGIN', payload: user})
	}
}

export default connect(null, mapDispatchToProps)(Login);
