import React from 'react';
import { Link } from 'react-router-dom';

function DreamerStory({ dreamer }) {
	return (
		<div className='dreamersStoryPage'>
			<div className='panel-body'>
				<dl>
					<dt></dt>
					<dd>{dreamer.occupation}</dd>
					<br />
					<dt>Country of Origin</dt>
					<dd>{dreamer.countryOfOrigin}</dd>
					<br />
					<dt>Languages Spoken</dt>
					<dd>{dreamer.languages}</dd>
					<br />
					<dt>About Me</dt>
					<dd>{dreamer.aboutMe}</dd>
					<br />
					<dt>Personal Links</dt>
					<dd><a href={dreamer.personalLink} target="_blank">{dreamer.personalLink}</a></dd>
				</dl>
			</div>
			<div className='panel-footer'>
				<Link to='/' className='panel-footer'>RETURN TO LIST</Link>
			</div>
		</div>
	);
}

export default DreamerStory;