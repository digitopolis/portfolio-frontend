import React from 'react'
import Login from './Login'
import { Message } from 'semantic-ui-react'

const ErrorPage = (props) => {
	return (
		<div>
			<Message error>
				<Message.Header>Please login to view your profile</Message.Header>
			</Message>
			<Login />
		</div>
	)
}

export default ErrorPage
