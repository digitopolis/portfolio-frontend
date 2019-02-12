import React from 'react'
import Comment from '../components/Comment'
import { List } from 'semantic-ui-react'

const WorkComments = (props) => {
	return (
		<div>
			<h2>On {props.title}:</h2>
			<List divided size='huge'>
				{props.comments.map(comment => {
					return <Comment key={comment.id} {...comment}/>
				})}
			</List>
		</div>

	)
}

export default WorkComments
