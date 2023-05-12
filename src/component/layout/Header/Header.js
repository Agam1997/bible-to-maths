import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Hamburger } from './ham.svg'
// import logo from "../../../../public/assets/images/ham.svg"
import './Header.css'

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative&family=Lobster+Two&display=swap" rel="stylesheet"></link>
      <div className="container">
        <div className="logo">
        <NavLink to="/">Bible to basic mathematics</NavLink>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              
            </li>
            <li>
              <NavLink to="/about-book" onClick={handleShowNavbar}>About the book</NavLink>
            </li>
            <li>
              <NavLink to="/about-author" onClick={handleShowNavbar}>About the author</NavLink>
            </li>
            {/* <li>
              <NavLink to="/about-book#ack" onClick={handleShowNavbar}>Acknowledgments</NavLink>
            </li> */}
            <li>
              <NavLink to="/contact-us" onClick={handleShowNavbar}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header