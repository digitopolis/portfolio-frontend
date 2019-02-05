import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'

class Work extends React.Component {
	render() {
		return (
			<Card
				link
				onClick={() => this.props.selectWork(this.props.id)}
				style={{margin: '20px'}}
			>
				<Image src={this.props.img_url}/>
				<Card.Content>
					<Card.Header>{this.props.title}</Card.Header>
					<Card.Meta>{this.props.media}</Card.Meta>
					<Card.Description>{this.props.statement}</Card.Description>
				</Card.Content>
				<Card.Content extra>{this.props.year}</Card.Content>
			</Card>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		selectWork: (work) => dispatch({type: 'SELECT_WORK', payload: work})
	}
}

export default connect(null, mapDispatchToProps)(Work)
