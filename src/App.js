import React, { Component, Fragment } from 'react';
import ArtistsContainer from './containers/ArtistsContainer'
import ProfileContainer from './containers/ProfileContainer'
import FormContainer from './containers/FormContainer'
import NewWork from './components/NewWork'
import Login from './components/Login'
import UserProfile from './components/UserProfile'
import ErrorPage from './components/ErrorPage'
import EditProfile from './components/EditProfile'
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

	userProfile = () => {
		return (
			this.props.currentUser ? <UserProfile /> : <ErrorPage />
		)
	}

	returnHome = () => {
		this.props.deselectWork()
		this.props.deselectArtist()
		// return <Redirect to='/'/>
	}

	signupOrLogIn = () => {
		return (
			<Fragment>
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
			</Fragment>
		)
	}

	logoutButton = () => {
		return (
			<Menu.Item
				as={ Link }
				to='/'
				position='right'
				onClick={this.handleLogout}
			>
				Log out
			</Menu.Item>
		)
	}

	handleLogout = () => {
		this.returnHome()
		this.props.logout()
	}

  render() {
    return (
			<div id='main'>
				<Router>
					<Fragment>
						{/*loggedOutMenu()*/}
						<Menu size='huge'>
							<Menu.Item
								as={ Link }
								onClick={this.returnHome}
								to='/'
							>
								Home
							</Menu.Item>
							{this.props.currentUser ? <Menu.Item as={ Link } to='/profile'>Profile</Menu.Item> : this.signupOrLogIn()}
							{/*<Menu.Item
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
							</Menu.Item>*/}
							{this.props.currentUser ? this.logoutButton() : null}
						</Menu>
						<h1>Portfolio</h1>
						<Segment>
							<Route exact path='/' render={this.mainContent}/>
							<Route path='/new' render={() => <FormContainer />}/>
							<Route path='/login' render={() => <Login />}/>
							<Route path='/new_work' render={() => <NewWork />}/>
							<Route exact path='/profile' render={this.userProfile}/>
							<Route path='/profile/edit' render={() => <EditProfile />}/>
			      </Segment>
					</Fragment>
				</Router>
			</div>
    );
  }
}

const	mapStateToProps = (state) => {
	return {
		selectedArtist: state.selectedArtist,
		currentUser: state.currentUser
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		deselectWork: () => dispatch({type: 'DESELECT_WORK'}),
		deselectArtist: () => dispatch({type: 'DESELECT_ARTIST'}),
		logout: () => dispatch({ type: 'LOGOUT' })
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
