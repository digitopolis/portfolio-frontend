import React from 'react'
import { connect } from 'react-redux'

class ArtistDetails extends React.Component {
	render () {
		return (
			<h1>hi</h1>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		artist: state.artists.find(a => a.id === state.selectedArtist)
	}
}

export default connect(mapStateToProps)(ArtistDetails);
