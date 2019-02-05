const defaultState = {
	artists: [],
	selectedArtist: null,
	selectedWork: null
}

const	reducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'FETCH_ARTISTS':
			return {...state,
				artists: action.payload}
		case 'FETCH_WORKS':
			return {...state,
				works: action.payload}
		case 'SELECT_ARTIST':
			return {...state,
				selectedArtist: action.payload}
		case 'DESELECT_ARTIST':
			return {...state,
				selectedArtist: null}
		case 'ADD_ARTIST':
			return {...state,
				artists: [...state.artists, action.payload]}
		case 'SELECT_WORK':
			return {...state,
				selectedWork: action.payload}
		case 'DESELECT_WORK':
			return {...state,
				selectedWork: null}
		case 'ADD_WORK':
			return {...state,
				works: [...state.works, action.payload]}
		default:
			return state
	}
}

export default reducer
