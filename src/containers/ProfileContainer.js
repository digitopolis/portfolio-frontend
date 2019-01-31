import React from 'react'
import ArtistDetails from '../components/ArtistDetails'
import { connect } from 'react-redux'
import { Menu, Icon } from 'semantic-ui-react'


class ProfileContainer extends React.Component {
	render () {
		return (
			<div>
				<Menu icon inverted>
					<Menu.Item
						name='back'
						onClick={this.props.deselectArtist}>
						<Icon name='arrow alternate circle left outline' />
					</Menu.Item>
				</Menu>
				<ArtistDetails />
			</div>
		)
	}
}

const	mapDispatchToProps = (dispatch) => {
	return {
		deselectArtist: () => dispatch({type: 'DESELECT_ARTIST'})
	}
}

export default connect(null, mapDispatchToProps)(ProfileContainer);
