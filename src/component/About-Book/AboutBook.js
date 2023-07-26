import React from "react";
import "./AboutBook.css";

function AboutBook() {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Lobster+Two&display=swap"
        rel="stylesheet"
      ></link>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative&display=swap"
        rel="stylesheet"
      ></link>
      {/* <div className="rowContainer"> */}
      <div className="desktop">
        <div className="frontRow">
          <div className="setImage">
            <div className="leftAboutSemiCircle"></div>
            <div className="firstRowFrontImage">
              <img src="./assets/images/front.png" alt="" />
            </div>
            <div className="rightAboutSemiCircle"></div>
          </div>

          <div className="firstRowDesc">
            <h3>About the book</h3>
            <p>
              <span class="purple">BIBLE TO BASIC MATHEMATICS </span>is an
              ultimate guide to Maths. It is a book that provide its readers
              with all the content required to improve their skills and basics
              of Mathematics such as theory of numbers, operation on fractions,
              operation of signs, shifting of terms across the equal to sign,
              splitting the middle term in quadratic equation, properties and
              basic theorems of geometry, mensuration, probability and many
              more, making it the best Mathematics book for self study.
            </p>
          </div>
        </div>
        <div className="backRow">
          <div className="backRowDesc">
            <h3>Book Editions</h3>
            <br />
            <h4>First Edition</h4>
            <p>
              This book is for any audience who want to clear their concepts of
              Mathematics from the scratch. It has been an interesting journey
              to write this book. This book works with a flow starting from the
              theory of numbers followed by many important concepts. I have made
              an attempt to put all the important concepts of mathematics
              together in a single book. Efforts have been made to write the
              book in a clear, concise and very simplified language which any
              student can understand with minimum assistance and can counter
              their fear of Mathematics. Each topic has been explained in detail
              and supported by sufficient solved examples. A well graded
              worksheet is also given at end of the topic.
            </p>
            <h4>Second Edition</h4>
            <p>
              The Second Edition now includes an index at the end of the book,
              providing readers with a convenient and efficient way to locate
              specific topics and concepts. By including an index, readers can
              easily navigate through the book and quickly access the
              information they need.
            </p>
          </div>
          <div className="backRowBackImage">
            <img src="./assets/images/back.png" alt="" />
          </div>
          {/* </div> */}
        </div>
        <h3 className="title">Acknowledgments</h3>
        <div className="acknowledgments">
          <div className="leftDiv">
            <video
              src="./assets/video/myVideo.mp4"
              alt="this is a video"
              controls="true"
              height="400"
              // width="600"
            />
            <p style={{textAlign:"center"}}>Humans of Chhattisgarh</p>
          </div>
          <div className="leftDiv">
            <img
              src="./assets/images/cpws.jpeg"
              alt="image"
              controls="true"
              height="400"
              width="600"
            />
            <p style={{textAlign:"center"}}>CPWS, Bilaspur</p>
          </div>
          <div className="leftDiv">
            <img
              src="./assets/images/great.jpeg"
              alt="image"
              controls="true"
              height="400"
              width="600"
            />
            <p style={{textAlign:"center"}}>The Great India School (Holy Hearts), Raipur</p>
          </div>
        </div>
      </div>
      <div className="mobile">
        <div className="frontRow">
          <div className="firstRowFrontImage">
            <img src="./assets/images/front.png" alt="" />
          </div>
          <div className="firstRowDesc">
            <h3>About the book</h3>
            <p>
              BIBLE TO BASIC MATHEMATICS is an ultimate guide to Maths. It is a
              book that provide its readers with all the content required to
              improve their skills and basics of Mathematics such as theory of
              numbers, operation on fractions, operation of signs, shifting of
              terms across the equal to sign, splitting the middle term in
              quadratic equation, properties and basic theorems of geometry,
              mensuration, probability and many more, making it the best
              Mathematics book for self study.
            </p>
          </div>
        </div>
        <div className="backRow">
          <div className="backRowDesc">
            <h3>Book editions</h3>
            <h4>First Edition</h4>
            <p>
              This book is for any audience who want to clear their concepts of
              Mathematics from the scratch. It has been an interesting journey
              to write this book. This book works with a flow starting from the
              theory of numbers followed by many important concepts. I have made
              an attempt to put all the important concepts of mathematics
              together in a single book. Efforts have been made to write the
              book in a clear, concise and very simplified language which any
              student can understand with minimum assistance and can counter
              their fear of Mathematics. Each topic has been explained in detail
              and supported by sufficient solved examples. A well graded
              worksheet is also given at end of the topic.
            </p>
            <h4>Second Edition</h4>
            <p>
            The Second Edition now includes an index at the end of the book,
              providing readers with a convenient and efficient way to locate
              specific topics and concepts. By including an index, readers can
              easily navigate through the book and quickly access the
              information they need.
            </p>
          </div>
          <div className="backRowBackImage">
            <img src="./assets/images/back.png" alt="" />
          </div>
          {/* </div> */}
        </div>
        <h3 className="title">Acknowledgments</h3>
        <div className="acknowledgments" id="ack">
          <div className="leftDiv">
            <video
              src="./assets/video/myVideo.mp4"
              alt="this is a video"
              controls="true"
              height="400"
            />
            <p style={{textAlign:"center"}}>Humans Of Chhattisgarh</p>
          </div>
          <div className="leftDiv">
            <img
              src="./assets/images/cpws.jpeg"
              alt="image"
              controls="true"
              height="200"
              
            />
            <p style={{textAlign:"center"}}>CPWS, Bilaspur</p>
          </div>
          <div className="leftDiv">
            <img
              src="./assets/images/great.jpeg"
              alt="image"
              controls="true"
              height="200"
              
            />
            <p style={{textAlign:"center"}}>The Great India School (Holy Hearts), Raipur</p>
          </div>
          {/* <div className="leftDiv">
            <img
              src="./assets/images/ack_2.jpeg"
              alt="image"
              controls="true"
              height="600"
              width="600"
              style={{paddingTop: "70px !important"}}
            />
            <p style={{textAlign:"center"}}>Honored at NPTEL of being a course topper!! <a href="https://www.imprzd.com/bi/NPTEL37645.html">Find out more here</a></p>
            
          </div> */}
          {/* <div className="rightDiv">
            <ol>
              <li>
                Sainik School, Imphal gave assignment to their students to write
                about this book.{" "}
                <a
                  href="https://ssimphal.nic.in/pdf/Class%207%20sv.pdf"
                  target="_blank"
                >
                  https://ssimphal.nic.in/pdf/Class%207%20sv.pdf
                </a>
              </li>
              <li>Humans of Chhattisgarh</li>
              <li>CPWS</li>
              <li>Raipur Great India School (Holy Heart)</li>
            </ol>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default AboutBook;
