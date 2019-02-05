import React from 'react'
import Artist from '../components/Artist'
import FilterContainer from './FilterContainer'
import { ARTISTS, WORKS } from '../apiEndpoints'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'

class ArtistsContainer extends React.Component {

	async componentDidMount() {
		const artists = await fetch(ARTISTS).then(res => res.json())
		const works = await fetch(WORKS).then(res => res.json())

		this.props.fetchArtists(artists)
		this.props.fetchWorks(works)
	}


	render () {
		const artists = this.props.filtering ? this.props.filteredArtists : this.props.artists
		return (
			<Grid>
				<Grid.Row>
					<Grid.Column width={13}>
						<div>
							{artists.map(artist => {
								return <Artist key={artist.id} {...artist}/>
							})}
						</div>
					</Grid.Column>
					<Grid.Column width={3}>
						<FilterContainer />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		artists: state.artists,
		filteredArtists: state.filteredArtists,
		filtering: state.filtering
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchArtists: (data) => dispatch({type: 'FETCH_ARTISTS', payload: data}),
		fetchWorks: (data) => dispatch({type: 'FETCH_WORKS', payload: data})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistsContainer)
