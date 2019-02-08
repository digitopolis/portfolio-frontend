import React, { Component, Fragment } from 'react';
import ArtistsContainer from './containers/ArtistsContainer'
import ProfileContainer from './containers/ProfileContainer'
import FormContainer from './containers/FormContainer'
import NewWork from './components/NewWork'
import Login from './components/Login'
import UserProfile from './components/UserProfile'
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

  render() {
    return (
			<div id='main'>
				<Router>
					<Fragment>
						<Menu size='huge'>
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
							<Menu.Item
								as={ Link }
								to='/login'
							>
								Login
							</Menu.Item>
							<Menu.Item
								as={ Link }
								to='/profile'
							>
								Profile
							</Menu.Item>
						</Menu>
						<h1>Portfolio</h1>
						<Segment>
							<Route exact path='/' render={this.mainContent}/>
							<Route path='/new' render={() => <FormContainer />}/>
							<Route path='/login' render={() => <Login />}/>
							<Route path='/new_work' render={() => <NewWork />}/>
							<Route path='/profile' render={() => <UserProfile />}/>
			      </Segment>
					</Fragment>
				</Router>
			</div>
    );
  }
}

const	mapStateToProps = (state) => {
	return {
		selectedArtist: state.selectedArtist
	}
}

export default connect(mapStateToProps)(App);
