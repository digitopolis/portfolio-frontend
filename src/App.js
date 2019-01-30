import React, { Component } from 'react';
import ArtistsContainer from './containers/ArtistsContainer'
import { ARTISTS } from './apiEndpoints'
import './App.css';
import { Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'


class App extends Component {

	state = {
		artists: []
	}

	componentDidMount() {
		fetch(ARTISTS)
			.then(res => res.json())
			.then(artists => {
				this.setState({ artists })
			})
	}
	
  render() {
    return (
      <Segment>
				<ArtistsContainer artists={this.state.artists}/>
      </Segment>
    );
  }
}

const	mapStateToProps = (state) => {
	return {
		selectedArtist: state.selectedArtist
	}
}

export default connect(mapStateToProps)(App);
