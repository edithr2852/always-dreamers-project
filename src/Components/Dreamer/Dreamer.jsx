import React from 'react';
import { Link } from 'react-router-dom';

function Dreamer({ dreamer, handleDeleteDreamer }) {
	return (
		<main className="dreamersPage">
		<div className='panel panel-default'>
			<div className='panel-heading'>
				<h3 className='panel-title'>{dreamer.name}</h3>
			</div>
			<div className='panel-footer Dreamer-action-panel'>
				<Link
					className='link btn btn-xs btn-info'
					to={{
						pathname: '/stories',
						state: { dreamer },
					}}
				>
					DETAILS
				</Link>
				&nbsp; | &nbsp;
				<Link
					className='link btn btn-xs btn-warning'
					to={{
						pathname: '/edit',
						state: { dreamer },
					}}
				>
					EDIT
				</Link>
				&nbsp; | &nbsp;
				<button
					className='btn btn-xs btn-danger margin-left-10'
					onClick={() => handleDeleteDreamer(dreamer._id)}
				>
					DELETE
				</button>
			</div>
		</div>
		</main>
	);
}

export default Dreamer;