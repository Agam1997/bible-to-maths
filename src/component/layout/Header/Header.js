import React from "react";
import "./Header.css";

function Header() {
  return (
    <nav>
      <a href="index.html">
        Bible to maths
        <div>
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About the book</a>
            </li>
            <li>
              <a href="/about-author">About the author</a>
            </li>
            <li>
              <a href="/contact-us">Contact-us</a>
            </li>
          </ul>
        </div>
      </a>
    </nav>
  );
}

export default Header;
