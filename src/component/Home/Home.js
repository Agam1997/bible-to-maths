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
  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView();
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
              -- A comprehensive guide to mathematics
            </h4>
            <div>
              <h1 className="mainHeading">Bible To Basic Mathematics</h1>
              {/* add a thick underline here */}
              {/* <img src="./assets/images/Rectangle.png" alt="rectangle-2" className="thickLine"/> */}
              <hr className="myLine" />
            </div>
            <div className="mainPara">
              <p>
                This book is for any audience who want to clear their
                <span className="purple"> concepts of mathematics </span>
                from the scratch. It has been an interesting journey to write
                this book. This book works with a flow starting from the theory
                of numbers followed by many important concepts. I have made an
                attempt to put all the important concepts of mathematics
                together in a single book.
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
            <div className="leftSemiCircle">
              {/* left pink  semi circle*/}
              {/* <img src="./assets/images/testimage.jpg" alt="" /> */}
            </div>
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
            <div className="rightSemiCircle">
              {/* <img src="./assets/images/testimage.jpg" alt="" /> */}
              {/* bottom right semi circle */}
            </div>
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
            Buy Now!?
          </p>
          <div>
            <p>Scoll to explore</p>
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
            <a href="/">Insta </a>
            <a href="/">Facebook </a>
            <a href="/">Twitter</a>
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
                This book is an attempt to clarify the concepts of mathematics
                from scratch for readers of all age groups. BIBLE TO BASIC
                MATHEMATICS provides readers with all the contents required to
                improve their skills and basics of Mathematics such as theory of
                numbers, operation on fractions, operation of signs, shifting of
                terms across the equal to sign, splitting the middle term in
                quadratic equation, properties and basic theorems of geometry,
                mensuration, probability and many more. This book is intended
                for all readers, even for those who have not been in touch with
                Mathematics from the last many years.
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
                  end={200}
                  duration={15}
                  className="myCounter"
                />
                <p>Students Taught</p>
              </div>
              <div className="bookNumber">
                <CountUp
                  start={0}
                  end={10}
                  duration={2}
                  className="myCounter"
                />
                <p>Student toppers</p>
              </div>
              <div>
                <h2 className="counterHeading">
                  Sales which proves our effectiveness
                </h2>
                <CountUp
                  start={0}
                  end={1000}
                  duration={100}
                  className="myCounter"
                />
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
                B.E., M.Tech [Hons.] in the field of Computer Science and
                Technology. She is UGC-NET and GATE qualified as well. She
                provided coaching to students of various grades at her coaching
                institute from the past 8 years. She did the Certification of
                ‘Python-Programming’ and ‘Deep-Learning’ from IIT – Madras. She
                is passionate about Mathematics. Why i write the book? As during
                her teaching career, she noticed that there is some lack of
                understanding in basic concept of Mathematics. So, in a casual
                conversation her brother suggested to transform the concept and
                knowledge into a book. This motivated her to attempt to write
                this book. She started writing in October-2019 and finished it
                in November, 2019. She decided to self publish it in the name of
                her grand-parents.
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
                  style={{ width: "100%" }}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="mobile">
        <div className="sectionOne">
          <div className="rightDiv">
            <div className="leftSemiCircle">
              {/* left pink  semi circle*/}
              {/* <img src="./assets/images/testimage.jpg" alt="" /> */}
            </div>
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
            <div className="rightSemiCircle">
              {/* <img src="./assets/images/testimage.jpg" alt="" /> */}
              {/* bottom right semi circle */}
            </div>
          </div>
          <div>
            <h1 className="mainHeading">Bible To Basic Mathematics</h1>
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
                end={200}
                duration={15}
                className="myCounter"
              />
              <p>Students Taught</p>
            </div>
            <div className="bookNumber">
              <CountUp start={0} end={10} duration={2} className="myCounter" />
              <p>Student toppers</p>
            </div>
            <div>
              <h2 className="counterHeading">
                Sales which proves our effectiveness
              </h2>
              <CountUp
                start={0}
                end={1000}
                duration={100}
                className="myCounter"
              />
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
            B.E., M.Tech [Hons.] in the field of Computer Science and
            Technology. She is UGC-NET and GATE qualified as well. She provided
            coaching to students of various grades at her coaching institute
            from the past 8 years. She did the Certification of
            ‘Python-Programming’ and ‘Deep-Learning’ from IIT – Madras. She is
            passionate about Mathematics. Why i write the book? As during her
            teaching career, she noticed that there is some lack of
            understanding in basic concept of Mathematics. So, in a casual
            conversation her brother suggested to transform the concept and
            knowledge into a book. This motivated her to attempt to write this
            book. She started writing in October-2019 and finished it in
            November, 2019. She decided to self publish it in the name of her
            grand-parents.
          </p>
        </div>
        </div>
      </div>
      <div className="centered">
        <button onClick={navigateToAuthor}>Read more about the Author</button>
      </div>
      <div>
        <div className="author"></div>
      </div>
    </div>
  );
}

export default Home;
