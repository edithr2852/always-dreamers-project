import React from "react";
import { Link } from "react-router-dom";
import AuthPage from "../../pages/AuthPage/AuthPage"
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }


  return (
    <header>
    <nav class='navigation'>
    <a href="/" ><img src="https://www.santamonica.gov/Media/Default/CMO/dreamers.png" width="400" height="100" /></a>
        <ul class="nav__links">
          <Link to="/" class="navlinks"><button className="btn btn-3">Sponsor a Dreamer</button></Link>
          &nbsp; | &nbsp;
          <Link to="/aboutus" class="navlinks"><button className="btn btn-3">About Us</button></Link>
          &nbsp; | &nbsp;
          <Link to="/add" class="navlinks"><button className="btn btn-3">Add Your Story</button></Link>
          &nbsp; | &nbsp;
          <Link to="/scholarships" class="navlinks"><button className="btn btn-3">Scholarships</button></Link>
          &nbsp; | &nbsp;
          <Link to="/donations" class="navlinks"><button className="btn btn-3">Donations</button></Link>
          {user ? (
          <>
          &nbsp; | &nbsp;
          <a href="/" ><img src="butterfly.jpeg" width="70" height="50" /></a>
           <span className='neon1'>Welcome, {user.name}</span>
          &nbsp; | &nbsp;
          <Link to="" onClick={handleLogOut} class="navlinks logOutBtn">
            <button className="btn btn-3">Log Out</button>
          </Link>  
          </>
          ) : (
            <>
            &nbsp; | &nbsp;
            <Link to="/auth" class="navlinks"><button className="btn btn-3">Login</button> 
            </Link>
            </>
          )}
        </ul>
    </nav>
    </header>
  )
}
