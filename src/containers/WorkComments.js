import React from 'react'
import Comment from '../components/Comment'
import { List } from 'semantic-ui-react'

const WorkComments = (props) => {
	return (
		<List divided size='huge'>
			{props.comments.map(comment => {
				return <Comment key={comment.id} {...comment}/>
			})}
		</List>
	)
}

export default WorkComments
