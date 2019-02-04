import React from 'react'
import { connect } from 'react-redux'
import { Grid, Icon, Button, Image, List } from 'semantic-ui-react'

class WorkDetails extends React.Component {
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
						<Image src={this.props.work.img_url}/>
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
					</Grid.Column>
				</Grid.Row>
			</Grid>

		)
	}
}

const mapStateToProps = (state) => {
	const work = state.works.find(w => w.id === state.selectedWork)
	const artist = state.artists.find(a => a.id === work.artist_id)
	return { work, artist }
}

const mapDispatchToProps = (dispatch) => {
	return {
		deselectWork: () => dispatch({type: 'DESELECT_WORK'})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkDetails);
