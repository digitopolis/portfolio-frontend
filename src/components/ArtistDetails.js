import React from 'react'
import Work from './Work'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { Grid, Image, Header, List, Button } from 'semantic-ui-react'

class ArtistDetails extends React.Component {

	state = {
		newWork: false
	}

	newWorkForm = () => {
		const newWork = !this.state.newWork
		this.setState({ newWork })
	}

	render () {
		if (this.state.newWork) {
			return <Redirect to='/new_work' />
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
						<List horizontal divided>
							<List.Item>
								<List.Content>{this.props.artist.location}</List.Content>
							</List.Item>
							<List.Item>
								<List.Content>{this.props.artist.media}</List.Content>
							</List.Item>
						</List>
						<Header size='medium'>{this.props.artist.bio}</Header>
						<Button onClick={this.newWorkForm}>+ add work</Button>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					{this.props.artist.works.map(work => {
						return <Work key={work.id} {...work} />
					})}
				</Grid.Row>
			</Grid>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		artist: state.artists.find(a => a.id === state.selectedArtist)
	}
}

export default connect(mapStateToProps)(ArtistDetails);
