import React from 'react'
import { Grid, Card, Image } from 'semantic-ui-react'
import {connect} from 'react-redux'

class Artist extends React.Component {

	displayImage = (i) => {
		const works = this.props.works
		return (
			<Card>
				<Image src={works[works.length - i].img_url}/>
			</Card>
		)
	}

	render () {
		return (
			<Grid celled>
				<Grid.Row>
					<Grid.Column width={3}>
						<img
							style={{width: 'auto'}}
							src={this.props.img_url}
							alt={`${this.props.name}`}
						/>
					</Grid.Column>
					<Grid.Column width={4}>
						<Card
							link
							header={this.props.name}
							meta={`${this.props.media} | ${this.props.location}`}
							description={`${this.props.bio.slice(0, 150)}...`}
							onClick={() => this.props.selectArtist(this.props.id)}
						/>
					</Grid.Column>
					<Grid.Column width={4}>
						{this.props.works[0] ? this.displayImage(1) : null}
					</Grid.Column>
					<Grid.Column width={4}>
						{this.props.works[1] ? this.displayImage(2) : null}
					</Grid.Column>
				</Grid.Row>
			</Grid>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		selectArtist: (artist) => dispatch({type: 'SELECT_ARTIST', payload: artist})
	}
}

export default connect(null, mapDispatchToProps)(Artist);
