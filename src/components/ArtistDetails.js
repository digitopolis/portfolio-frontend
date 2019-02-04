import React from 'react'
import Work from './Work'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'

class ArtistDetails extends React.Component {
	render () {
		return (
			<Grid celled='internally'>
				<Grid.Row textAlign='center'>
					<h1>{this.props.artist.name}</h1>
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
