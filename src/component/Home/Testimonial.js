import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./Testimonial.css"


function Testimonial() {
    let testimonialArr = [
        {
          desc: "She is an excellent teacher, mentor, guide. Her way of teaching easily clears the concept of the topic.",
          name: "Samridhi Agrawal",
          subs: "XI - TJIS",
          place: "Bilaspur, (C.G.)",
          img: "./assets/images/samridhi.jpeg"
        },
        {
          desc: "She had a unique way of making everyone feel involved and feel that they had her attention at all times. She made sure we knew what we were doing, the tests every week really helped us ace our boards.",
          name: "Rishita Agrawal",
          subs: "B.E.(ET), GEC",
          place: "Bilaspur, (C.G.)",
          img: "./assets/images/rishita.jpeg"
        },
        {
          desc: "I learnt a lot from her. As a student , I feel like her teaching skills are excellent. She interacted with us like our friends. Thank you for making sure that we perform well in our studies.",
          name: "Shubhi Agrawal",
          subs: "XI, St. Francis",
          place: "Bilaspur, (C.G.)",
          img: "./assets/images/shubhi.jpeg"
        },
        {
          desc: "She has a deep knowledge of the subject and she is extremely supportive towards her students.",
          name: "Ishaan Chandra",
          subs: "X, TSS",
          place: "Lucknow, (U.P.)",
          img: "./assets/images/ishan.jpeg"
        },
        {
          desc: "She has a very distinct way of teaching as she doesn't give up on her students no matter what. That put me in a really great spot before my exams and the confidence gave me an edge despite my failures in the past.",
          name: "Vaibhav Gauraha",
          subs: "M.Tech, SSCET",
          place: "Bhilai, (C.G.)",
          img: "./assets/images/vaibhav.jpeg"
        },
      ];
  return (
    <Carousel
            showArrows={false}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={2100}
          >
            {testimonialArr
              .map((testimonial, ind) => {
                return (
                  <div key={ind}>
                    <img src={testimonial.img} className='testimage'/>

                    <div id="myCarousel">
                      <h3 className="testName">{testimonial.name}</h3>
                      <h4 className="testSubs">{testimonial.subs}</h4>
                      <h4 className="testPlace">{testimonial.place}</h4>
                      <p className="testDesc">{testimonial.desc}</p>
                    </div>
                  </div>
                );
              })}
          </Carousel>
  )
}

export default Testimonial