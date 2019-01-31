import React, { Component, Fragment } from 'react';
import ArtistsContainer from './containers/ArtistsContainer'
import ProfileContainer from './containers/ProfileContainer'
import FormContainer from './containers/FormContainer'
import './App.css';
import { Segment, Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {


	mainContent = () => {
		return (
			this.props.selectedArtist ? <ProfileContainer /> : <ArtistsContainer />
		)
	}

	// newArtistForm = () => {
	//
	// }

  render() {
    return (
			<Router>
				<Fragment>
					<Menu>
						<Menu.Item
							as={ Link }
							to='/'
						>
							Home
						</Menu.Item>
						<Menu.Item
							as={ Link }
							to='/new'
						>
							Signup
						</Menu.Item>
					</Menu>
					<Segment>
						<Route exact path='/' render={this.mainContent}/>
						<Route path='/new' render={() => <FormContainer />}/>

		      </Segment>
				</Fragment>
			</Router>
    );
  }
}

const	mapStateToProps = (state) => {
	return {
		selectedArtist: state.selectedArtist
	}
}

export default connect(mapStateToProps)(App);
