import React from 'react';
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
	function handleLogOut() {
		userService.logOut();
		setUser(null);
	}

	return (
		<nav>
			<Link to='/'>Sponsor a Dreamer</Link>
			&nbsp; | &nbsp;
			<Link to='/aboutus'>All About Us</Link>
			&nbsp; | &nbsp;
			<Link to='/add'>Add Your Story</Link>
			&nbsp; | &nbsp;
			<Link to='/scholarships'>Scholarships</Link>
			&nbsp; | &nbsp;
			<Link to='/donations'>Donations</Link>
			&nbsp; | &nbsp;
			<span>Welcome, {user.name}</span>
			&nbsp; | &nbsp;
			<Link to='' onClick={handleLogOut}>
				Log Out
			</Link>
		</nav>
	);
}
