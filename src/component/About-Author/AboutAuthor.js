import React from "react";
import "./AboutAuthor.css";
import { useEffect } from "react";

function AboutAuthor() {
  useEffect(() => {
    window.scrollTo(-80, -80);
  }, []);
  return (
    <div>
      {/* <div className="rowContainer"> */}
      <div className="desktop">
        <div className="frontAuthRow">
          <div className="firstAuthRowFrontImage">
            <img src="./assets/images/main_author.jpg" alt="" />
          </div>
          <div className="frontAuthRowDesc">
            <h3>Pragati Agrawal</h3>
            <p>
            Pragati Agrawal has an impressive academic background with a B.E. and M.Tech [HONS] in Computer Science and Technology. She has also qualified for the UGC-NET and GATE exams. Additionally, she has over ten years of experience in coaching students of various grades, which indicates her commitment to education and teaching. Furthermore, she has completed certification courses in Python Programming, Natural Language Processing, Data Analytics, Deep Learning from various IITs, along with interests in Computer Science, Artificial Intelligence and Machine Learning. <br/>This is an evidence of her interest and expertise in programming and machine learning. Lastly, Pragati Agrawal is passionate about Mathematics, which can be an essential foundation for Computer Science and Machine Learning. Her passion for the subject may inspire her to delve deeper into mathematical concepts and apply them to her work in the field of technology.
            </p>
          </div>
        </div>
        <div className="backRow">
          <div className="backRowDesc">
            <h3>What inspired her to write the book?</h3>
            <p>
              While working as a teacher, she observed that some students
              struggled with fundamental concepts in Mathematics. In a casual
              conversation with her brother, he proposed transforming her
              knowledge into a book, which motivated her to begin writing.
              Starting in October 2019, she completed the book the following
              month and decided to self-publish it under her grandparents' name.
            </p>
          </div>
          <div className="backRowBackImage">
            <img src="./assets/images/author_book_2.jpg" alt="" />
          </div>
          {/* </div> */}
        </div>
        <div>
          <h3>Certifications</h3>
        </div>
        <div className="main-cert">
          <img
            src="./assets/images/ack_2.jpeg"
            alt="image"
            controls="true"
            height="600"
            width="600"
            style={{ paddingTop: "70px !important" }}
          />
          <p style={{ textAlign: "center" }}>
            Honored at NPTEL of being a course topper!!{" "}
            <a href="https://www.imprzd.com/bi/NPTEL37645.html" className="highlight" target="_blank">
              Find out more here
            </a>
          </p>
        </div>
        <div class="grid-container">
          <div class="grid-item">
            <img
              src="./assets/images/cert_1.jpg"
              alt="image"
              controls="true"
              height="600"
              width="600"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div class="grid-item">
            <img
              src="./assets/images/cert_2.jpg"
              alt="image"
              controls="true"
              height="600"
              width="600"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <div className="grid-container">
          <div class="grid-item">
            <img
              src="./assets/images/cert_3.jpg"
              alt="image"
              controls="true"
              height="600"
              width="600"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div class="grid-item">
            <img
              src="./assets/images/cert_4.jpg"
              alt="image"
              controls="true"
              height="600"
              width="600"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
      <div className="mobile">
        <div className="frontAuthRow">
          <div className="firstAuthRowFrontImage">
            <img src="./assets/images/main_author.jpg" alt="" />
          </div>
          <div className="frontAuthRowDesc">
            <h3>Pragati Agrawal</h3>
            <p>
            Pragati Agrawal has an impressive academic background with a B.E. and M.Tech [HONS] in Computer Science and Technology. She has also qualified for the UGC-NET and GATE exams. Additionally, she has over ten years of experience in coaching students of various grades, which indicates her commitment to education and teaching. Furthermore, she has completed certification courses in Python Programming, Natural Language Processing, Data Analytics, Deep Learning from various IITs, along with interests in Computer Science, Artificial Intelligence and Machine Learning. <br/>This is an evidence of her interest and expertise in programming and machine learning. Lastly, Pragati Agrawal is passionate about Mathematics, which can be an essential foundation for Computer Science and Machine Learning. Her passion for the subject may inspire her to delve deeper into mathematical concepts and apply them to her work in the field of technology.
            </p>
          </div>
        </div>
        <div className="backRow">
          <div className="backRowDesc">
            <h3>What inspired her to write the book?</h3>
            <p>
            While working as a teacher, she observed that some students
              struggled with fundamental concepts in Mathematics. In a casual
              conversation with her brother, he proposed transforming her
              knowledge into a book, which motivated her to begin writing.
              Starting in October 2019, she completed the book the following
              month and decided to self-publish it under her grandparents' name.
            </p>
          </div>
          <div className="backRowBackImage">
            <img src="./assets/images/author_book_2.jpg" alt="" />
          </div>
          {/* </div> */}
        </div>
        <div>
          <h3>Certifications</h3>
        </div>
        <div className="main-cert">
          <img
            src="./assets/images/ack_2.jpeg"
            alt="image"
            controls="true"
            style={{ paddingTop: "70px !important",  maxWidth: "100%" }}
          />
          <p style={{ textAlign: "center" }}>
            Honored at NPTEL of being a course topper!!{" "}
            <a href="https://www.imprzd.com/bi/NPTEL37645.html" className="highlight" target="_blank">
              Find out more here
            </a>
          </p>
        </div>
        <div class="grid-container">
          <div class="grid-item">
            <img
              src="./assets/images/cert_1.jpg"
              alt="image"
              controls="true"
              // height="600"
              // width="600"
              style={{ objectFit: "contain", maxWidth: "100%" }}
            />
          </div>
          <div class="grid-item">
            <img
              src="./assets/images/cert_2.jpg"
              alt="image"
              controls="true"
              // height="600"
              // width="600"
              style={{ objectFit: "contain", maxWidth: "100%" }}
            />
          </div>
        </div>
        <div className="grid-container">
          <div class="grid-item">
            <img
              src="./assets/images/cert_3.jpg"
              alt="image"
              controls="true"
              // height="600"
              // width="600"
              style={{ objectFit: "contain", maxWidth: "100%" }}
            />
          </div>
          <div class="grid-item">
            <img
              src="./assets/images/cert_4.jpg"
              alt="image"
              controls="true"
              // height="600"
              // width="600"
              style={{ objectFit: "contain", maxWidth: "100%" }}
            />
          </div>
        </div>

        {/* <div className="certs">
          <div className="cert-item">

          </div>
        </div> */}
      </div>
    </div>
  );
}

export default AboutAuthor;
