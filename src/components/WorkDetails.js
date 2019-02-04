import React from 'react'
import { connect } from 'react-redux'
import { Icon, Button } from 'semantic-ui-react'

class WorkDetails extends React.Component {
	render () {
		return (
			<Button
				icon
				onClick={this.props.deselectWork}>
				<Icon name='close' />
			</Button>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		work: state.works.find(w => w.id === state.selectedWork)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		deselectWork: () => dispatch({type: 'DESELECT_WORK'})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkDetails);
