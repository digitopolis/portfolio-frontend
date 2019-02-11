import React from 'react'
import Comment from '../components/Comment'
import CommentForm from '../components/CommentForm'
import { List, Button, Message, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class CommentsContainer extends React.Component {

	state = {
		newComment: false
	}

	addComments = () => {
		if (this.props.currentUser) {
			return <Button onClick={this.showCommentForm}>+ add comment</Button>
		} else {
			return (
				<Message attached='bottom' warning>
					<Icon name='exclamation circle' />
					Please <Link to='/login'>Login</Link> to leave a comment.
				</Message>
			)
		}
	}

	showCommentForm = () => {
		this.setState({
			newComment: true
		})
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
				{this.state.newComment ? <CommentForm /> : null}
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
