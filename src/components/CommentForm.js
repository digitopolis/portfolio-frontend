import React from 'react'
import { COMMENTS } from '../apiEndpoints'
import { Segment, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'


class CommentForm extends React.Component {

	state = {
		content: ''
	}

	handleChange = (event) => {
		const content = event.target.value
		this.setState({ content })
	}

	handleSubmit = () => {
		const jwt = localStorage.getItem('jwt')
		fetch(COMMENTS, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				'Authorization': `Bearer ${jwt}`
			},
			body: JSON.stringify({
				content: this.state.content,
				artist_id: this.props.artist,
				work_id: this.props.work
			})
		}).then(res => res.json())
		.then(this.handleResponse)
	}

	handleResponse = (res) => {
		let work = this.props.works.find(w => w.id === this.props.work)
		work.comments = [...work.comments, res]
		console.log(res, work);
		//find the work, add the new comment to the comments, then dispatch updated work to reducer to update store
	}

	render () {
		return (
			<Segment>
				<Form onSubmit={this.handleSubmit}>
					<Form.TextArea
						label='Comment'
						onChange={this.handleChange}
					/>
					<Form.Button>Post</Form.Button>
				</Form>
			</Segment>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		artist: state.currentUser.id,
		work: state.selectedWork,
		works: state.works
	}
}

export default connect(mapStateToProps)(CommentForm);
