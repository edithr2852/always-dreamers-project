import React from 'react';
import { Link } from 'react-router-dom';

function DreamerStory({ dreamer }) {
	return (
		<div className='panel panel-default'>
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
					<dd>{dreamer.personalLink}</dd>
				</dl>
			</div>
			<div className='panel-footer'>
				<Link to='/'>RETURN TO LIST</Link>
			</div>
		</div>
	);
}

export default DreamerStory;