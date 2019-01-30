const defaultState = {
	selectedArtist: null
}

const	reducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'FIRST_CASE':
			console.log('hi');
			break;
		default:
			return state
	}
}

export default reducer
