import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const Work = (props) => {
	return (
		<Card>
			<Image src={props.img_url}/>
			<Card.Content>
				<Card.Header>{props.title}</Card.Header>
				<Card.Meta>{props.media}</Card.Meta>
				<Card.Description>{props.statement}</Card.Description>
			</Card.Content>
			<Card.Content extra>{props.year}</Card.Content>
		</Card>

	)
}

export default Work
