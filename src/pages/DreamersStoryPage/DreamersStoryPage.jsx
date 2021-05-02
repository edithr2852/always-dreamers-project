import React from 'react';
import DreamerStory from '../../Components/DreamerStory/DreamerStory'
import {useLocation} from 'react-router-dom';

function DreamersStoryPage(props) {
	const { state: { dreamer } } = useLocation()

	return (
		<>
			<h1>{dreamer.name} is a Dreamer</h1>
			<DreamerStory
        key={dreamer._id}
        dreamer={dreamer}
      />
		
		</>
	);
}

export default DreamersStoryPage;