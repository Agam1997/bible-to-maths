import React from "react";
import "./Header.css";

function Header() {
  return (
    <nav>
      <a href="/">
        Bible to maths
      </a>
        {/* <div > */}
          <ul className="links">
            {/* <li>
              <a href="/home">Home</a>
            </li> */}
            <li>
              <a href="/about-book">About the book</a>
            </li>
            <li>
              <a href="/about-author">About the author</a>
            </li>
            <li>
              <a href="/contact-us">Contact-us</a>
            </li>
          </ul>
        {/* </div> */}
    </nav>
  );
}

export default Header;
