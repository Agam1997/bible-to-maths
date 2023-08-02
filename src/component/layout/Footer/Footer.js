import React from "react";
// import { useNavigate } from "react-router-dom";
import "./Footer.css";
import {
  FooterLink
} from "./FooterStyles";

const Footer = () => {
  return (
    <div>
      <div className="footer">
      <div>
        <img src="./assets/images/front.png" alt="" className="footerImage"/>
      </div>
      <div className="footerMenu">
        <div className="columnMenu">
          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/about-author">About Author</FooterLink>
          <FooterLink href="/#testimonial">Testimonials</FooterLink>
          <FooterLink href="/about-book">About Book</FooterLink>
          <FooterLink href="/contact-us">Contact-us</FooterLink>
        </div>
        <div className="columnMenu">
          <FooterLink href="https://www.facebook.com/pragati.agrawal.54?mibextid=ZbWKwL" target="_blank">
            <i className="fab fa-facebook-f">
              <span style={{ marginLeft: "10px" }}>Facebook</span>
            </i>
          </FooterLink>
          <FooterLink href="https://instagram.com/pragatiagrawal09?igshid=ZDdkNTZiNTM=" target="_blank">
            <i className="fab fa-instagram">
              <span style={{ marginLeft: "10px" }}>Instagram</span>
            </i>
          </FooterLink>
          <FooterLink href="https://www.linkedin.com/in/pragati-agrawal-9890h" target="_blank">
            <i className="fab fa-linkedin">
              <span style={{ marginLeft: "10px" }}>LinkedIn</span>
            </i>
          </FooterLink>
        </div>
      </div>
      </div>
      <div className="footerMobile">
        
      </div>
      <div className="centered" style={{background: "#d8d3c9", paddingTop: "2%", paddingBottom: "3%"}} >
      <a onClick={()=>window.open('https://kaffeeemedia.com','_blank')}>All rights reserved, @KaffeeMedia</a>
      </div>
    </div>
  );
};
export default Footer;
