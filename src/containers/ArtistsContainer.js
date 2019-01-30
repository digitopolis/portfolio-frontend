import React from 'react'
import Artist from '../components/Artist'

const ArtistsContainer = (props) => {
	return (
		<div>
			{props.artists.map(artist => {
				return <Artist key={artist.id} {...artist}/>
			})}
		</div>
	)
}

export default ArtistsContainer
