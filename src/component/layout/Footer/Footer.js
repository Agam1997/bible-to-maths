import React from "react";
// import { useNavigate } from "react-router-dom";
import "./Footer.css";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
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
          <FooterLink href="#">
            <i className="fab fa-facebook-f">
              <span style={{ marginLeft: "10px" }}>Facebook</span>
            </i>
          </FooterLink>
          <FooterLink href="#">
            <i className="fab fa-instagram">
              <span style={{ marginLeft: "10px" }}>Instagram</span>
            </i>
          </FooterLink>
          <FooterLink href="#">
            <i className="fab fa-twitter">
              <span style={{ marginLeft: "10px" }}>Twitter</span>
            </i>
          </FooterLink>
          <FooterLink href="#">
            <i className="fab fa-youtube">
              <span style={{ marginLeft: "10px" }}>Youtube</span>
            </i>
          </FooterLink>
        </div>
      </div>
      </div>
      <div className="centered" style={{background: "#d8d3c9", paddingTop: "2%", paddingBottom: "3%"}} >
      <a onClick={()=>window.open('https://kaffeeemedia.com','_blank')}>All rights reserved, @KaffeeMedia</a>
      </div>
    </div>
    // <Box>
    //   <h1 style={{ color: "green",
    //                textAlign: "center",
    //                marginTop: "-50px" }}>
    //     GeeksforGeeks: A Computer Science Portal for Geeks
    //   </h1>
    //   <img src="./assets/images/front.png" alt="" className="footerImage"/>
    //   <Container>
    //     <Row>
    //       <Column>
    //         <Heading>About Us</Heading>
    //         <FooterLink href="/">Home</FooterLink>
    //         <FooterLink href="/about-author">About Author</FooterLink>
    //         <FooterLink href="/#testimonial">Testimonials</FooterLink>
    //         <FooterLink href="/about-book">About Book</FooterLink>
    //         <FooterLink href="/contact-us">Contact-us</FooterLink>
    //       </Column>
    //       <Column>
    //         <Heading>Services</Heading>
    //         <FooterLink href="#">Writing</FooterLink>
    //         <FooterLink href="#">Internships</FooterLink>
    //         <FooterLink href="#">Coding</FooterLink>
    //         <FooterLink href="#">Teaching</FooterLink>
    //       </Column>
    //       <Column>
    //         <Heading>Contact Us</Heading>
    //         <FooterLink href="#">Uttar Pradesh</FooterLink>
    //         <FooterLink href="#">Ahemdabad</FooterLink>
    //         <FooterLink href="#">Indore</FooterLink>
    //         <FooterLink href="#">Mumbai</FooterLink>
    //       </Column>
    //       <Column>
    //         <Heading>Social Media</Heading>
    //         <FooterLink href="#">
    //           <i className="fab fa-facebook-f">
    //             <span style={{ marginLeft: "10px" }}>
    //               Facebook
    //             </span>
    //           </i>
    //         </FooterLink>
    //         <FooterLink href="#">
    //           <i className="fab fa-instagram">
    //             <span style={{ marginLeft: "10px" }}>
    //               Instagram
    //             </span>
    //           </i>
    //         </FooterLink>
    //         <FooterLink href="#">
    //           <i className="fab fa-twitter">
    //             <span style={{ marginLeft: "10px" }}>
    //               Twitter
    //             </span>
    //           </i>
    //         </FooterLink>
    //         <FooterLink href="#">
    //           <i className="fab fa-youtube">
    //             <span style={{ marginLeft: "10px" }}>
    //               Youtube
    //             </span>
    //           </i>
    //         </FooterLink>
    //       </Column>
    //     </Row>
    //   </Container>
    //   <div className="centered" style={{position: "relative", right: "3%"}}>
    //     <p>All rights reserved  </p>

    //   </div>
    //   <a href="https://kaffeeemedia.com" target="_blank" className="centered" style={{position: "relative", right: "2.9%"}}>  Designed by Kaffee Media</a>
    // </Box>
  );
};
export default Footer;
