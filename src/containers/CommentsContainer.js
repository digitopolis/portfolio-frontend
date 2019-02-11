import React from 'react'
import Comment from '../components/Comment'
import { List } from 'semantic-ui-react'

const CommentsContainer = (props) => {
	return (
		<List>
			{props.comments.map(comment => {
				return <Comment key={comment.id} {...comment}/>
			})}
		</List>
	)
}

export default CommentsContainer
