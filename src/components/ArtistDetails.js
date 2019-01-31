import React from 'react'
import Work from './Work'
import { connect } from 'react-redux'
import { Segment } from 'semantic-ui-react'

class ArtistDetails extends React.Component {
	render () {
		return (
			<Segment>
				{this.props.artist.works.map(work => {
					return <Work key={work.id} {...work} />
				})}
			</Segment>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		artist: state.artists.find(a => a.id === state.selectedArtist)
	}
}

export default connect(mapStateToProps)(ArtistDetails);
