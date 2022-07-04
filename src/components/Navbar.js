import logo from '../Picture/logo.png';
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" width={50} height={40} className="d-inline-block align-text-top" />Travel-india</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link className="nav-link active" to="/Home">Home</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" to="/About">About Us</Link>
              </li>
             
              
              <li className="nav-item dropdown ">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Travel-with whom
                </a>
                <ul className="dropdown-menu bg-secondary " aria-labelledby="navbarDropdown ">
                  <li><a className="dropdown-item" href="#">Friends</a></li>
                  <li><a className="dropdown-item" href="#">Family</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">self</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Tourist Destination
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">culture and heritage</a></li>
                  <li><a className="dropdown-item" href="#">Natural wildlife</a></li>
                  <li><a className="dropdown-item" href="#">Town and Cities</a></li>
                  <li><a className="dropdown-item" href="#">Beach areas</a></li>
                </ul>
              </li>
              
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

        </div>
    );
}
export default Navbar;