import React from "react";
import "./AboutAuthor.css";

function AboutAuthor() {
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
              Pragati Agrawal, from Bilaspur (C.G.), India, is B.E., M.Tech
              [Hons.] in the field of Computer Science and Technology. She is
              UGC-NET and GATE qualified as well. She provided coaching to
              students of various grades at her coaching institute from the past
              8 years. She did the Certification of ‘Python-Programming’ and
              ‘Deep-Learning’ from IIT – Madras. She is passionate about
              Mathematics.
            </p>
          </div>
        </div>
        <div className="backRow">
          <div className="backRowDesc">
            <h3>Why i write the book?</h3>
            <p>
              As during her teaching career, she noticed that there is some lack
              of understanding in basic concept of Mathematics. So, in a casual
              conversation her brother suggested to transform the concept and
              knowledge into a book. This motivated her to attempt to write this
              book. She started writing in October-2019 and finished it in
              November, 2019. She decided to self publish it in the name of her
              grand-parents.
            </p>
          </div>
          <div className="backRowBackImage">
            <img src="./assets/images/author_book_2.jpg" alt="" />
          </div>
          {/* </div> */}
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
              Pragati Agrawal, from Bilaspur (C.G.), India, is B.E., M.Tech
              [Hons.] in the field of Computer Science and Technology. She is
              UGC-NET and GATE qualified as well. She provided coaching to
              students of various grades at her coaching institute from the past
              8 years. She did the Certification of ‘Python-Programming’ and
              ‘Deep-Learning’ from IIT – Madras. She is passionate about
              Mathematics.
            </p>
          </div>
        </div>
        <div className="backRow">
          <div className="backRowDesc">
            <h3>Why i write the book?</h3>
            <p>
              As during her teaching career, she noticed that there is some lack
              of understanding in basic concept of Mathematics. So, in a casual
              conversation her brother suggested to transform the concept and
              knowledge into a book. This motivated her to attempt to write this
              book. She started writing in October-2019 and finished it in
              November, 2019. She decided to self publish it in the name of her
              grand-parents.
            </p>
          </div>
          <div className="backRowBackImage">
            <img src="./assets/images/author_book_2.jpg" alt="" />
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default AboutAuthor;
