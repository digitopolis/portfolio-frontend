import React from 'react'
import Comment from '../components/Comment'
import { List, Button, Message, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'

class CommentsContainer extends React.Component {

	addComments = () => {
		if (this.props.currentUser) {
			return <Button>+ add comment</Button>
		} else {
			return (
				<Message attached='bottom' warning>
					<Icon name='exclamation circle' />
					Please login to leave a comment.
				</Message>
			)
		}
	}

	render() {
		return (
			<div>
				<List divided size='huge'>
					{this.props.comments.map(comment => {
						return <Comment key={comment.id} {...comment}/>
					})}
				</List>
				{this.addComments()}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		currentUser: state.currentUser
	}
}

export default connect(mapStateToProps)(CommentsContainer)
