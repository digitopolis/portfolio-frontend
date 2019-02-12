import React from 'react'
import Work from './Work'
import { ARTISTS } from '../apiEndpoints'
import { Grid, Image, Header, List, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'

class ProfileView extends React.Component {

	state = {
		deleted: false
	}

	handleDelete = () => {
		const jwt = localStorage.getItem('jwt')
		const id = this.props.artist.id
		fetch(`${ARTISTS}/${id}`, {
			method: 'DELETE',
			headers: {
				'Authorization': `Bearer ${jwt}`
			}
		}).then(res => this.handleResponse(res, id))
	}

	handleResponse = (res, id) => {
		console.log(res, id)
		this.props.deleteArtist(id)
		this.props.logout()
		this.setState({
			deleted: true
		})
	}

	render () {
		if (this.state.deleted) {
			return <Redirect to='/'/>
		}

		return (
			<Grid celled='internally'>
				<Grid.Row>
					<Grid.Column textAlign='center'>
						<Header size='large'>{this.props.artist.name}</Header>
						<Image
							centered
							rounded
							size='medium'
							src={this.props.artist.img_url}
						/>
						<div>
							<List horizontal divided>
								<List.Item>
									<List.Content>{this.props.artist.location}</List.Content>
								</List.Item>
								<List.Item>
									<List.Content>{this.props.artist.media}</List.Content>
								</List.Item>
							</List>
						</div>
						<div>
							<List horizontal>
								<List.Item>
									<List.Content>
										<List.Icon link name='twitter'/>
									</List.Content>
								</List.Item>
								<List.Item>
									<List.Content>
										<List.Icon link name='instagram'/>
									</List.Content>
								</List.Item>
							</List>
						</div>
						<Header size='large'>{this.props.artist.bio}</Header>
						<Button onClick={this.props.newWork}>+ add work</Button>
						<Button onClick={this.props.edit}>Edit profile</Button>
						<Button
							secondary
							onClick={this.handleDelete}
						>
							Delete account
						</Button>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					{this.props.works.map(work => {
						return <Work key={work.id} {...work} />
					})}
				</Grid.Row>
			</Grid>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		artist: state.artists.find(a => a.id === state.currentUser.id),
		works: state.works.filter(w => w.artist_id === state.currentUser.id)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		deleteArtist: (artist) => dispatch({ type: 'DELETE_ARTIST', payload: artist }),
		logout: () => dispatch({ type: 'LOGOUT' })
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView);
