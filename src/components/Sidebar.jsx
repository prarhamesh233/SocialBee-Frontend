
import { Link } from "react-router-dom";

import '../css/Sidebar.css'

function SideBar() {
  

  return (
    <div >
      <nav className="sidebar">
        <h5>SocialBee</h5>
        <Link to="/">
          <span className="material-icons">home</span>Home
        </Link>
        <Link to="/profile">
          <span className="material-icons">account_circle</span>Profile
        </Link>
        <Link to="/create">
        <span class="material-icons">edit</span>Create
        </Link>
     
        <Link to="/Search">
          <span className="material-icons">search</span>Search
        </Link>
        <Link to="/login">
        <span className="material-icons">login</span>Login
        </Link>
        <Link  to='/register'>
        <span className="material-icons">how_to_reg</span>Signup
        </Link>
      </nav>
  
      
      
    </div>
  );
}

export default SideBar;