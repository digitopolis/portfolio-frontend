import React from 'react'
import { Segment, Grid, Card } from 'semantic-ui-react'
import {connect} from 'react-redux'

class Artist extends React.Component {
	render () {
		return (
			<Segment>
				<Grid celled>
					<Grid.Row>
						<Grid.Column width={3}>
							<img
								style={{width:200}}
								src={this.props.img_url}
								alt={`${this.props.name}`}
							/>
						</Grid.Column>
						<Grid.Column width={13}>
							<Card
								link
								header={this.props.name}
								meta={`Media: ${this.props.media} | ${this.props.location}`}
								description={this.props.bio}
								onClick={() => this.props.selectArtist(this.props.id)}
							/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		selectArtist: (artist) => dispatch({type: 'SELECT_ARTIST', payload: artist})
	}
}

export default connect(null, mapDispatchToProps)(Artist);
