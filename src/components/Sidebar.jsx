
import { Link } from "react-router-dom";

import '../css/Sidebar.css'

function SideBar() {
  

  return (
    <div >
      <nav className="sidebar">
        <h5>BHAITYA</h5>
        <Link to="/">
          <span className="material-icons">home</span>Home
        </Link>
        <Link to="/profile">
          <span className="material-icons">account_circle</span>Profile
        </Link>
        <Link to="/explore">
          <span className="material-icons">explore</span>Explore
        </Link>
     
        <Link to="/Search">
          <span className="material-icons">search</span>Search
        </Link>
        <Link to="">
          <span className="material-icons">logout</span>Logout
        </Link>
      </nav>
  
      
      
    </div>
  );
}

export default SideBar;
