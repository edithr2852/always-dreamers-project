import React from "react";
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }


  return (
    <header>
    <nav class='navigation'>
    <a href="/" ><img src="butterfly.jpeg" width="70" height="50" /></a>
        <ul class="nav__links">
          <Link to="/" class="navlinks"><button>Sponsor a Dreamer</button></Link>
          &nbsp; | &nbsp;
          <Link to="/aboutus" class="navlinks"><button>All About Us</button></Link>
          &nbsp; | &nbsp;
          <Link to="/add" class="navlinks"><button>Add Your Story</button></Link>
          &nbsp; | &nbsp;
          <Link to="/scholarships" class="navlinks"><button>Scholarships</button></Link>
          &nbsp; | &nbsp;
          <Link to="/donations" class="navlinks"><button>Donations</button></Link>
          &nbsp; | &nbsp;
           {user && <span>Welcome, {user.name}</span>}
          &nbsp; | &nbsp;
          {user &&
          <Link to="" onClick={handleLogOut} class="navlinks logOutBtn">
            <button>Log Out</button>
          </Link>  }
        </ul>
    </nav>
    </header>
  )
}
