import React from 'react'
import { render } from 'react-dom'
import ShareLink from '../../dist'

render(
	<ShareLink link='https://www.facebook.com/'>
		{link => (
			<a href={link} target='_blank'>Share link</a>
		)}
	</ShareLink>,
	document.querySelector('#container')
)