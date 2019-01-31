const defaultState = {
	artists: [],
	selectedArtist: null
}

const	reducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'FETCH_DATA':
			return {...state,
				artists: action.payload}
		case 'SELECT_ARTIST':
			return {...state,
				selectedArtist: action.payload}
		case 'DESELECT_ARTIST':
			return {...state,
				selectedArtist: null}
		case 'ADD_ARTIST':
			return {...state,
				artists: [...state.artists, action.payload]}
		default:
			return state
	}
}

export default reducer
