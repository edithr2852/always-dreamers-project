import React from 'react';
import { Link } from 'react-router-dom';


function DreamerStory({ dreamer }) {
	return (
		<div className='dreamersStoryPage'>
			<div className='panel-body no-border'>
				<dl>
					<dt className="underline">Occupation</dt>
					<dd>{dreamer.occupation}</dd>
					<br />
					<dt className="underline">Country of Origin</dt>
					<dd>{dreamer.countryOfOrigin}</dd>
					<br />
					<dt className="underline">Languages Spoken</dt>
					<dd>{dreamer.languages}</dd>
					<br />
					<dt className="underline">About Me</dt>
					<dd>{dreamer.aboutMe}</dd>
					<br />
					<dt className="underline">Personal Links</dt>
					<dd ><a href={dreamer.personalLink} target="_blank" className="neon">{dreamer.personalLink}</a></dd>
				</dl>
			</div>
			<div className='panel-footer'>
				<Link to='/' className='panel-footer link'><button className="btn btn-3">RETURN TO LIST</button></Link>
			</div>
		</div>
	);
}

export default DreamerStory;