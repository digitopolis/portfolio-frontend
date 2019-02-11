import React from 'react'
import { List } from 'semantic-ui-react'


class Comment extends React.Component {
	render () {
		return (
			<List.Item>
				<List.Content>
					<List.Header>{this.props.content}</List.Header>
				</List.Content>
			</List.Item>
		)
	}
}

export default Comment;
