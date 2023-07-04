import React, { useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./Home.css";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";
import { CarouselWrapper } from "react-pretty-carousel";
import Testimonial from "./Testimonial";

function Home() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/about-book`;
    navigate(path);
  };
  const navigateToAuthor = () => {
    navigate("/about-author");
  };
  const myRef = useRef();

  const executeScroll = () => myRef.current.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "start"
  });
  let reviews = [
    "./assets/images/review1.jpeg",
    "./assets/images/review2.jpeg",
    // "./assets/images/review3.jpeg",
    "./assets/images/review4.jpeg",
    "./assets/images/review5.jpeg",
    "./assets/images/review6.jpeg",
    "./assets/images/review7.jpeg",
    "./assets/images/review8.jpeg",
    "./assets/images/review9.jpeg",
  ];
  return (
    <div>
      {/* home header */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet"></link>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
<link href="https://fonts.googleapis.com/css2?family=Lobster+Two&display=swap" rel="stylesheet"></link>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link>
<link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"></link>
      <div className="desktop">
        <div className="leftAloneSvg">
          <img src="./assets/images/Pattern.png" alt="pattern-1" />
        </div>
        <div className="rightAloneSvg">
          <img src="./assets/images/Pattern.png" alt="pattern-1" />
        </div>
        <div id="bannerSection">
          {/* can adjust svg in background */}

          <div className="leftDiv">
            <h4 className="upperHeading">
              -- A Comprehensive Guide To Mathematics
            </h4>
            <div>
              <h1 className="mainHeading">Bible To Basic Mathematics</h1>
              <hr className="myLine" />
            </div>
            <div className="mainPara">
              <p>
                <span className="purple">BIBLE TO BASIC MATHEMATICS</span> is a book that can be used to clear the basic maths for school syllabus as well as for competitive exams. It has been an interesting journey to write this book. This book works with a flow starting from the theory of numbers followed by many important concepts. I have made an attempt to put all the important concepts of mathematics together in a single book and in doing so I have tried to make it the best book for basic mathematics.
              </p>
            </div>
            <br />
            <br />
            <button
              className="buyNow"
              onClick={() =>
                window.open(
                  "https://www.amazon.in/BIBLE-BASIC-MATHEMATICS-MATHS-COMPETITIVE/dp/8194681308/ref=sr_1_1?crid=OJZSKDBWRZQ3&keywords=bible+to+maths&qid=1674392962&sprefix=%2Caps%2C488&sr=8-1",
                  "_blank"
                )
              }
            >
              Buy Now
            </button>
          </div>
          <div className="rightDiv">
            {/* <div className="leftSemiCircle">
            </div> */}
            <div>
              <img
                className="mainImage"
                src="./assets/images/book_tilted.png"
                alt=""
                onClick={() =>
                  window.open(
                    "https://www.amazon.in/BIBLE-BASIC-MATHEMATICS-MATHS-COMPETITIVE/dp/8194681308/ref=sr_1_1?crid=OJZSKDBWRZQ3&keywords=bible+to+maths&qid=1674392962&sprefix=%2Caps%2C488&sr=8-1",
                    "_blank"
                  )
                }
              />
              {/* book image */}
            </div>
            {/* <div className="rightSemiCircle">
            </div> */}
          </div>
        </div>
        <div className="bannerBottom">
          {/* home footer more, scroll to explore, insta facebook twitter */}
          <p
            onClick={() =>
              window.open(
                "https://www.amazon.in/BIBLE-BASIC-MATHEMATICS-MATHS-COMPETITIVE/dp/8194681308/ref=sr_1_1?crid=OJZSKDBWRZQ3&keywords=bible+to+maths&qid=1674392962&sprefix=%2Caps%2C488&sr=8-1",
                "_blank"
              )
            }
            style={{ cursor: "pointer" }}
          >
            Buy Now!
          </p>
          <div>
            <p>Scroll to explore</p>
            <div class="mouse_scroll" onClick={executeScroll}>
              {/* <div class="mouse">
              <div class="wheel"></div>
            </div> */}
              <div>
                <span class="m_scroll_arrows unu"></span>
                <span class="m_scroll_arrows doi"></span>
                <span class="m_scroll_arrows trei"></span>
              </div>
            </div>
          </div>

          <p>
            <a href="https://instagram.com/pragatiagrawal09?igshid=ZDdkNTZiNTM=" target="_blank">Insta </a>
            <a href="https://www.facebook.com/pragati.agrawal.54?mibextid=ZbWKwL" target="_blank">Facebook </a>
            <a href="https://www.linkedin.com/in/pragati-agrawal-9890h" target="_blank">LinkedIn</a>
          </p>
        </div>

        {/* Testimonial section */}
        <div className="testimonial" id="testimonial" ref={myRef}>
          <div className="testRightDiv">
            <div className="leftSemiCircle">
              {/* left pink  semi circle*/}
              {/* <img src="./assets/images/testimage.jpg" alt="" /> */}
            </div>
            <div className="book">
              <img src="./assets/images/back.png" alt="" />
              {/* book image */}
            </div>
            <div className="rightSemiCircle">
              {/* <img src="./assets/images/testimage.jpg" alt="" /> */}
              {/* bottom right semi circle */}
            </div>
          </div>
          {/* testominals */}
          <div className="testLeftDiv">
            <Testimonial />
          </div>
        </div>

        {/* books sold counter section */}

        {/* <div className="centered" style={{ background: "#D8D3C9" }}>
        <div>
          <h2 className="counterHeading">
            Sales which proves our effectiveness
          </h2>
          <CountUp start={0} end={10000} duration={15} className="myCounter" />
        </div>
      </div> */}

        {/* About book */}
        <div>
          <div className="bookContainer">
            <div className="bookDesc">
              <h4 className="bookHeading">Bible to Basic Mathematics</h4>
              <p>
              This book is an attempt to clarify the concepts of mathematics from scratch for readers, making it a Maths book for all ages.<span className="purple"> BIBLE TO BASIC MATHEMATICS</span> provides the readers with all the contents required to improve their skills and basics of Mathematics such as theory of numbers, operation on fractions, operation of signs, shifting of terms across the equal to sign, splitting the middle term in quadratic equation, properties and basic theorems of geometry, mensuration, probability and many more. Amalgamation of all these different mathematical branches into one book makes it one of the best maths books for all competitive exams.
              </p>
            </div>
            <div className="bookImage">
              {/* left div image */}
              <img src="./assets/images/front.png" alt="" />
            </div>
            <div className="bookNumbers">
              {/* <blockquote></blockquote> */}

              <div className="bookNumber">
                <span className="quote"></span>
                <CountUp
                  start={0}
                  end={700}
                  duration={3.7}
                  className="myCounter"
                />
                <p>Students Taught</p>
              </div>
              <div className="bookNumber">
                <CountUp
                  start={0}
                  end={10}
                  duration={3.7}
                  className="myCounter"
                />
                <p>Teaching Experience (yrs)</p>
              </div>
              <div className="bookNumber">
                <CountUp
                  start={0}
                  end={5000}
                  duration={3.7}
                  className="myCounter"
                />
                <p>
                Books Sold
                </p>
              </div>
              <span className="invertedQuote"></span>
            </div>
          </div>
          <div className="centered">
            <button onClick={routeChange}>Read more about the book</button>
          </div>
        </div>

        {/* about the author */}

        <div>
          <div className="author">
            <div className="authorImage">
              {/* left div image */}
              <img src="./assets/images/author_book_2.jpg" alt="" />
            </div>
            <div className="authorDesc">
              <h4 className="authorHeading">Pragati Agrawal</h4>
              <p className="authorDescPara">
              Pragati Agrawal has an impressive academic background with a B.E. and M.Tech [HONS] in Computer Science and Technology. She has also qualified for the UGC-NET and GATE exams. Additionally, she has over nine years of experience in coaching students of various grades, which indicates her commitment to education and teaching.
Furthermore, she has completed certification courses in Python Programming and Deep Learning from IIT, Madras. This is an evidence of her interest and expertise in programming and machine learning.
Lastly, Pragati Agrawal is passionate about Mathematics, which can be an essential foundation for Computer Science and Machine Learning. Her passion for the subject may inspire her to delve deeper into mathematical concepts and apply them to her work in the field of technology.
              </p>
              {/* <div className="authorNumbers">
            <div className="authorNumber">
              <p> 200-300 </p>
              <p>Students Taught</p>
            </div>
            <div className="authorNumber">
              <p> 180 </p>
              <p>Student toppers</p>
            </div>
          </div> */}
            </div>
          </div>
          <div className="centered">
            <button onClick={navigateToAuthor}>
              Read more about the Author
            </button>
          </div>
        </div>
        {/* Amazon reviews */}
        <div className="reviewContainer">
          {/* <CarouselWrapper items={1} mode="normal">
          {reviews.map((image, index) => (
            <img src={image} alt={`pic-${index}`} key={index} />
          ))}
        </CarouselWrapper> */}
          <Carousel
            className="reviews"
            showArrows={false}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={2100}
          >
            {reviews.map((image, index) => (
              <div className="carousel2">
                <img
                  src={image}
                  alt={`pic-${index}`}
                  key={index}
                  style={{ width: "80%" }}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="mobile">
        <div className="sectionOne">
          <div className="rightDiv">
            {/* <div className="leftSemiCircle"> */}
              {/* left pink  semi circle*/}
              {/* <img src="./assets/images/testimage.jpg" alt="" /> */}
            {/* </div> */}
            <div>
              <img
                className="mainImage"
                src="./assets/images/front.png"
                alt=""
                onClick={() =>
                  window.open(
                    "https://www.amazon.in/BIBLE-BASIC-MATHEMATICS-MATHS-COMPETITIVE/dp/8194681308/ref=sr_1_1?crid=OJZSKDBWRZQ3&keywords=bible+to+maths&qid=1674392962&sprefix=%2Caps%2C488&sr=8-1",
                    "_blank"
                  )
                }
              />
              {/* book image */}
            </div>
            {/* <div className="rightSemiCircle"> */}
              {/* <img src="./assets/images/testimage.jpg" alt="" /> */}
              {/* bottom right semi circle */}
            {/* </div> */}
          </div>
          <div>
            <h1 className="mainHeading">Bible to basic mathematics</h1>
            {/* add a thick underline here */}
            {/* <img src="./assets/images/Rectangle.png" alt="rectangle-2" className="thickLine"/> */}
            <hr className="myLine" />
          </div>
          <div>
            <button
              className="buyNow"
              onClick={() =>
                window.open(
                  "https://www.amazon.in/BIBLE-BASIC-MATHEMATICS-MATHS-COMPETITIVE/dp/8194681308/ref=sr_1_1?crid=OJZSKDBWRZQ3&keywords=bible+to+maths&qid=1674392962&sprefix=%2Caps%2C488&sr=8-1",
                  "_blank"
                )
              }
            >
              Buy Now
            </button>
          </div>
        </div>
        <div className="sectionTwo">
          <div className="testimonial" id="testimonial" ref={myRef}>
            {/* testominals */}
            <div className="testLeftDiv">
              <Testimonial />
            </div>
          </div>
        </div>
        <div className="sectionThree">
          <div>
            <p>
              This book is an attempt to clarify the concepts of mathematics
              from scratch for readers of all age groups. BIBLE TO BASIC
              MATHEMATICS provides readers with all the contents required to
              improve their skills and basics of Mathematics such as theory of
              numbers, operation on fractions, operation of signs, shifting of
              terms across the equal to sign, splitting the middle term in
              quadratic equation, properties and basic theorems of geometry,
              mensuration, probability and many more. This book is intended for
              all readers, even for those who have not been in touch with
              Mathematics from the last many years.
            </p>
          </div>
          <div className="bookImage">
            {/* left div image */}
            <img src="./assets/images/back.png" alt="" />
          </div>
          <div className="bookNumbers">
            {/* <blockquote></blockquote> */}

            <div className="bookNumber">
              <span className="quote"></span>
              <CountUp
                start={0}
                end={700}
                duration={4}
                className="myCounter"
              />
              <p>Students Taught</p>
            </div>
            <div className="bookNumber">
                <CountUp
                  start={0}
                  end={10}
                  duration={3}
                  className="myCounter"
                />
                <p>Teaching Experience (yrs)</p>
              </div>
              <div className="bookNumber">
                <CountUp
                  start={0}
                  end={5000}
                  duration={3}
                  className="myCounter"
                />
                <p>
                Books Sold
                </p>
              </div>
            <span className="invertedQuote"></span>
          </div>
          <div className="centered">
            <button onClick={routeChange}>Read more about the book</button>
          </div>
        </div>
        <div className="sectionFour">
          <div className="authorImage">
            {/* left div image */}
            <img src="./assets/images/author_book_2.jpg" alt="" />
          </div>
        
        <div className="authorDesc">
          <h4 className="authorHeading">Pragati Agrawal</h4>
          <p className="authorDescPara">
          Pragati Agrawal has an impressive academic background with a B.E. and M.Tech [HONS] in Computer Science and Technology. She has also qualified for the UGC-NET and GATE exams. Additionally, she has over nine years of experience in coaching students of various grades, which indicates her commitment to education and teaching. Furthermore, she has completed certification courses in Python Programming, Natural Language Processing, Data Analytics, Deep Learning from various IIT's , along with Computer Science, Artificial Intelligence and Machine Learning. 
<br /> This is an evidence of her interest and expertise in programming and machine learning. Lastly, Pragati Agrawal is passionate about Mathematics, which can be an essential foundation for Computer Science and Machine Learning. Her passion for the subject may inspire her to dwell deeper into mathematical concepts and apply them to her work in the field of technology.
          </p>
        </div>
        </div>
      </div>
      <div className="centered">
        <button onClick={navigateToAuthor}>Read more about the Author</button>
      </div>
      {/* <div>
        <div className="author"></div>
      </div> */}
    </div>
  );
}

export default Home;
