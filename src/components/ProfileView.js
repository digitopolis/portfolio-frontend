import React from 'react'
import Work from './Work'
import { Grid, Image, Header, List, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'

class ProfileView extends React.Component {
	render () {
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

export default connect(mapStateToProps)(ProfileView);
