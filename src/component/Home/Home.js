import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./Home.css";

function Home() {
  let count = 0;
  setInterval(() => {
    if (count < process.env.BOOKS_SOLD) {
      count++;
    }
  }, 1000);
  let testimonialArr = [
    {
      desc: "She is an excellent teacher, mentor, guide. Her way of teaching easily clears the concept of the topic.",
      name: "Samridhi Agrawal",
      subs: "XI - TJIS",
      place: "Bilaspur, (C.G.)",
    },
    {
      desc: "She had a unique way of making everyone feel involved and feel that they had her attention at all times. She made sure we knew what we were doing, the tests every week really helped us ace our boards.",
      name: "Rishita Agrawal",
      subs: "B.E.(ET), GEC",
      place: "Bilaspur, (C.G.)",
    },
    {
      desc: "I learnt a lot from her. As a student , I feel like her teaching skills are excellent. She interacted with us like our friends. Thank you for making sure that we perform well in our studies.",
      name: "Shubhi Agrawal",
      subs: "XI, St. Francis",
      place: "Bilaspur, (C.G.)",
    },
    {
      desc: "She has a deep knowledge of the subject and she is extremely supportive towards her students.",
      name: "Ishaan Chandra",
      subs: "X, TSS",
      place: "Lucknow, (U.P.)",
    },
    {
      desc: "She has a very distinct way of teaching as she doesn't give up on her students no matter what. That put me in a really great spot before my exams and the confidence gave me an edge despite my failures in the past.",
      name: "Vaibhav Gauraha",
      subs: "M.Tech, SSCET",
      place: "Bhilai, (C.G.)",
    },
  ];
  return (
    <div>
      {/* home header */}
      <div className="aloneSvg">{/* for svg */}</div>
      <div id="bannerSection">
        {/* can adjust svg in background */}

        <div className="leftDiv">
          <h4 className="upperHeading">- A book</h4>
          <div>
            <h1 className="mainHeading">Bible to Maths</h1>
            {/* add a thick underline here */}
          </div>
          <div className="mainPara">
            <p>
              This is the <span className="purple">best</span> book. this is the
              best book this is the best book this is the best book
            </p>
          </div>
          {/* <button href="amazon link here">Buy Now</button> */}
        </div>
        <div className="rightDiv">
          <div className="leftSemiCircle">
            {/* left pink  semi circle*/}
            {/* <img src="./assets/images/testimage.jpg" alt="" /> */}
          </div>
          <div className="book">
            <img src="./assets/images/testimage.jpg" alt="" />
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
        <p>Need help?</p>
        <p>Scoll to explore</p>
        <p>
          <a href="/">Insta </a>
          <a href="/">Facebook </a>
          <a href="/">Twitter</a>
        </p>
      </div>
      {/* Testimonial section */}
      <div>
        <div>
          {/* testominals */}
          <Carousel>
            <div className="carouselItem">
              {testimonialArr
                .filter((item, i) => i < 3)
                .map((testimonial, ind) => {
                  return (
                    <div className="testimonial" key={ind}>
                      {/* svg icon or img icon */}
                      <p className="testName">{testimonial.name}</p>
                      <p className="testSubs">{testimonial.subs}</p>
                      <p className="testPlace">{testimonial.place}</p>
                      <p className="testDesc">{testimonial.desc}</p>
                    </div>
                  );
                })}
            </div>
            <div className="carouselItem">
              {testimonialArr
                .filter((item, i) => i > 2)
                .map((testimonial, ind) => {
                  return (
                    <div className="testimonial" key={ind}>
                      {/* svg icon or img icon */}
                      <p className="testName">{testimonial.name}</p>
                      <p className="testSubs">{testimonial.subs}</p>
                      <p className="testPlace">{testimonial.place}</p>
                      <p className="testDesc">{testimonial.desc}</p>
                    </div>
                  );
                })}
            </div>
          </Carousel>
          <div>{/* 1st */}</div>
          <div>{/* 2nd */}</div>
        </div>
      </div>

      {/* books sold counter section */}

      <div className="counter">
        <div>
          <h4 className="counterHeading">
            Sales which proves our effectiveness
          </h4>
          <p className="numberCounter">{count}</p>
        </div>
      </div>

      {/* About book */}
      <div className="book">
        <div className="bookDesc">
          <h4 className="bookHeading">My book</h4>
          <p className="bookDesc">
            the best book ever, the best book ever, the best book ever, the best
            book ever, the best book ever
          </p>
          <div className="bookNumbers">
            <div className="bookNumber">
              <p> 200-300 </p>
              <p>Students Taught</p>
            </div>
            <div className="bookNumber">
              <p> 180 </p>
              <p>Student toppers</p>
            </div>
          </div>
          <button>Read more about the book</button>
        </div>
        <div className="bookImage">
          {/* left div image */}
          <img src="./assets/images/testimage.jpg" alt="" />
        </div>
      </div>

      {/* about the author */}
      <div className="author">
        <div className="authorImage">
          {/* left div image */}
          <img src="./assets/images/testimage.jpg" alt="" />
        </div>
        <div className="authorDesc">
          <h4 className="authorHeading">My Author</h4>
          <p className="authorDesc">
            the best author ever, the best author ever, the best author ever,
            the best author ever, the best author ever
          </p>
          <div className="authorNumbers">
            <div className="authorNumber">
              <p> 200-300 </p>
              <p>Students Taught</p>
            </div>
            <div className="authorNumber">
              <p> 180 </p>
              <p>Student toppers</p>
            </div>
          </div>
          <button>Read more about the Author</button>
        </div>
      </div>
    </div>
  );
}

export default Home;