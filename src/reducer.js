const defaultState = {
	artists: [],
	selectedArtist: null
}

const	reducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'FETCH_DATA':
			console.log('fetching..');
			return {...state, artists: action.payload}
		default:
			return state
	}
}

export default reducer
