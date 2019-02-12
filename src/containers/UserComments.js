import React from 'react'
import WorkComments from './WorkComments'
import { connect } from 'react-redux'

class UserComments extends React.Component {
	render () {
		return (
			<div>
				<h3>Comments</h3>
				{this.props.works.map(work => {
					return <WorkComments key={work.id} {...work} />
				})}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		works: state.works.filter(w => w.artist_id === state.currentUser.id)
	}
}

export default connect(mapStateToProps)(UserComments);
