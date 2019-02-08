import React from 'react'
import { WORKS } from '../apiEndpoints'
import { connect } from 'react-redux'
// import { Redirect } from 'react-router'
import { Grid, Icon, Button, Image, List } from 'semantic-ui-react'

class WorkDetails extends React.Component {

	handleDelete = () => {
		const id = this.props.work.id
		this.props.deselectWork()
		fetch(WORKS + id, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		}).then(() => this.props.deleteWork(id))
	}

	render () {
		return (
			<Grid>
				<Grid.Row>
					<Button
						icon
						onClick={this.props.deselectWork}>
						<Icon name='close' />
					</Button>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column width={10}>
						<Image
							src={this.props.work.img_url}
							floated='right'/>
					</Grid.Column>
					<Grid.Column width={4}>
						<List>
							<List.Item>
								<List.Header>{this.props.work.title}</List.Header>
							</List.Item>
							<List.Item>
								<List.Icon name='user' />
								<List.Content>{this.props.artist.name}</List.Content>
							</List.Item>
							<List.Item>
								<List.Icon name='calendar alternate outline' />
								<List.Content>{this.props.work.year}</List.Content>
							</List.Item>
							<List.Item>
								<List.Icon name='paint brush' />
								<List.Content>{this.props.work.media}</List.Content>
							</List.Item>
							<List.Item>
								<List.Content>{this.props.work.statement}</List.Content>
							</List.Item>
						</List>
						{this.props.currentUser && this.props.artist.id === this.props.currentUser.id ? <Button onClick={this.handleDelete}>Delete</Button> : null}
					</Grid.Column>
				</Grid.Row>
			</Grid>

		)
	}
}

const mapStateToProps = (state) => {
	const work = state.works.find(w => w.id === state.selectedWork)
	const artist = state.artists.find(a => a.id === work.artist_id)
	const currentUser = state.currentUser
	return { work, artist, currentUser }
}

const mapDispatchToProps = (dispatch) => {
	return {
		deselectWork: () => dispatch({type: 'DESELECT_WORK'}),
		deleteWork: (work) => dispatch({type: 'DELETE_WORK', payload: work})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkDetails);
