const defaultState = {
	artists: [],
	filteredArtists: [],
	selectedArtist: null,
	selectedWork: null,
	filtering: false
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
		case 'DELETE_WORK':
			return {...state,
			works: state.works.filter(w => w.id !== action.payload)}
		case 'FILTER_ARTISTS':
			return {...state,
				filteredArtists: state.artists.filter(a => a.media.toLowerCase().includes(action.payload)),
				filtering: true}
		default:
			return state
	}
}

export default reducer
