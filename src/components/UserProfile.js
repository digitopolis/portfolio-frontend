import React from 'react'
import UserComments from '../containers/UserComments'
import ProfileView from './ProfileView'
import { PROFILE } from '../apiEndpoints'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { Menu } from 'semantic-ui-react'

class UserProfile extends React.Component {

	state = {
		newWork: false,
		editProfile: false,
		activeItem: 'profile'
	}

	componentDidMount() {
		const jwt = localStorage.getItem('jwt')
		fetch(PROFILE, {
			method: 'GET',
			headers: {
				'Authorization': `Bearer ${jwt}`
			}
		}).then(res => res.json())
		.then(console.log)
	}

	newWorkForm = () => {
		const newWork = !this.state.newWork
		this.setState({ newWork })
	}

	editProfile = () => {
		const editProfile = !this.state.editProfile
		this.setState({ editProfile })
	}

	handleItemClick = (event, { name }) => {
		this.setState({ activeItem: name })
	}

	render () {
		if (this.state.newWork) {
			return <Redirect to='/new_work' />
		}
		if (this.state.editProfile) {
			return <Redirect to='/profile/edit' />
		}
		return (
			<div>
				<Menu tabular>
					<Menu.Item
						name='profile'
						active={this.state.activeItem === 'profile'}
						onClick={this.handleItemClick} />
					<Menu.Item
						name='comments'
						active={this.state.activeItem === 'comments'}
						onClick={this.handleItemClick} />
				</Menu>

				{this.state.activeItem === 'profile' ? <ProfileView newWork={this.newWorkForm} edit={this.editProfile}/> : <UserComments />}
			</div>

			// <Grid celled='internally'>
			// 	<Grid.Row>
			// 		<Grid.Column textAlign='center'>
			// 			<Header size='large'>{this.props.artist.name}</Header>
			// 			<Image
			// 				centered
			// 				rounded
			// 				size='medium'
			// 				src={this.props.artist.img_url}
			// 			/>
			// 			<div>
			// 				<List horizontal divided>
			// 					<List.Item>
			// 						<List.Content>{this.props.artist.location}</List.Content>
			// 					</List.Item>
			// 					<List.Item>
			// 						<List.Content>{this.props.artist.media}</List.Content>
			// 					</List.Item>
			// 				</List>
			// 			</div>
			// 			<div>
			// 				<List horizontal>
			// 					<List.Item>
			// 						<List.Content>
			// 							<List.Icon link name='twitter'/>
			// 						</List.Content>
			// 					</List.Item>
			// 					<List.Item>
			// 						<List.Content>
			// 							<List.Icon link name='instagram'/>
			// 						</List.Content>
			// 					</List.Item>
			// 				</List>
			// 			</div>
			// 			<Header size='large'>{this.props.artist.bio}</Header>
			// 			<Button onClick={this.newWorkForm}>+ add work</Button>
			// 			<Button onClick={this.editProfile}>Edit profile</Button>
			// 		</Grid.Column>
			// 	</Grid.Row>
			// 	<Grid.Row>
			// 		{this.props.works.map(work => {
			// 			return <Work key={work.id} {...work} />
			// 		})}
			// 	</Grid.Row>
			// </Grid>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		artist: state.artists.find(a => a.id === state.currentUser.id),
		works: state.works.filter(w => w.artist_id === state.currentUser.id)
	}
}

export default connect(mapStateToProps)(UserProfile);
