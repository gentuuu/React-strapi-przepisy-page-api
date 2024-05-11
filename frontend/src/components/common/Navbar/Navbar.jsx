import { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.scss";



function Navbar() {
// adding the states
const [isActive, setIsActive] = useState(false);
//add the active class
const toggleActiveClass = () => {
setIsActive(!isActive);
};
//clean up function to remove the active class
const removeActive = () => {
setIsActive(false)
}
return (
  <div className="header-nav">
    <div className="container">
      <div className="header-nav-content">
        <div className="logo">Przepisy</div>
        <nav className="navbar">
          <ul className={`navMenu ${isActive ? 'active' : '' }`}>
            <li onClick={removeActive}>
              <Link to='/' className="navLink">Home</Link>
            </li>
            <li onClick={removeActive}>
              <Link to='/onas' className="navLink">O nas</Link>
            </li>
            <li onClick={removeActive}>
              <Link to='/przepisy' className="navLink">Przepisy</Link>
            </li>
            <li onClick={removeActive}>
              <Link to='/diety' className="navLink">Diety</Link>
            </li>
            <li onClick={removeActive}>
              <Link to='/artykuly' className="navLink">Blogs</Link>
            </li>
            <li onClick={removeActive}>
              <Link to='/kontakt' className="navLink">Kontakt</Link>
            </li>
          </ul>
          <div className={`hamburger ${isActive ? 'active' : '' }`} onClick={toggleActiveClass}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </div>
    </div>
  </div>

);
}
export default Navbar;