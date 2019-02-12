import React from 'react'
import { List, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'


class Comment extends React.Component {

	findArtist = () => {
		return this.props.artists.find(a => a.id === this.props.artist_id)
	}

	render () {
		const artist = this.findArtist()
		return (
			<List.Item>
				<List.Content>
					<List.Header>{artist.name}</List.Header>
					<List.Description>
						{this.props.content} {/*<Button size='mini' icon='delete' />*/}
					</List.Description>
				</List.Content>
			</List.Item>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		artists: state.artists,
		currentUser: state.currentUser
	}
}

export default connect(mapStateToProps)(Comment)
