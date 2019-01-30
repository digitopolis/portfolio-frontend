import React from 'react'
import { Segment } from 'semantic-ui-react'

class Artist extends React.Component {
	render () {
		return (
			<Segment>
				<img src={this.props.img_url} alt={`${this.props.name}`}/>
				<h1>{this.props.name}</h1>
			</Segment>
		)
	}
}

export default Artist;
