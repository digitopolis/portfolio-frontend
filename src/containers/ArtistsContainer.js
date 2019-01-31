import React from 'react'
import Artist from '../components/Artist'
import { ARTISTS } from '../apiEndpoints'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'

class ArtistsContainer extends React.Component {

	componentDidMount() {
		fetch(ARTISTS)
			.then(res => res.json())
			.then(artists => {
				this.props.fetchArtists(artists)
			})

	}

	render () {
		return (
			<Grid>
				<Grid.Row>
					<Grid.Column width={13}>
						<div>
							{this.props.artists.map(artist => {
								return <Artist key={artist.id} {...artist}/>
							})}
						</div>
					</Grid.Column>
					<Grid.Column width={3}>

					</Grid.Column>
				</Grid.Row>
			</Grid>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		artists: state.artists
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchArtists: (data) => dispatch({type: 'FETCH_DATA', payload: data})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistsContainer)
