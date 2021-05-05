import React from 'react';
import DreamerStory from '../../Components/DreamerStory/DreamerStory'
import {useLocation} from 'react-router-dom';

function DreamersStoryPage(props) {
	const { state: { dreamer } } = useLocation()

	return (
		<>
		<section className='dreamersStoryPage'>
			<h1>{dreamer.name} is a Dreamer</h1>
			<DreamerStory
        key={dreamer._id}
        dreamer={dreamer}
      />
		</section>
		</>
	);
}

export default DreamersStoryPage;