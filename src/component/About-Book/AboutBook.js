import React from "react";
import "./AboutBook.css"

function AboutBook() {
  return (
    <div>
      {/* <div className="rowContainer"> */}
        <div className="frontRow">
          <div className="firstRowFrontImage">
            <img src="./assets/images/front.png" alt="" />
          </div>
          <div className="firstRowDesc">
            <h3>About the book</h3>
            <p>
              This book is an attempt to clarify the concepts of Mathematics
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
              In the Second Edition, index has also been included at the end in
              order to access the contents in a precise manner.
            </p>
          </div>
          <div className="backRowBackImage">
            <img src="./assets/images/back.png" alt="" />
          </div>
        {/* </div> */}
      </div>
      <div className="acknowledgments">
        <h3>Acknowledgments</h3>
        <ol>
          <li>
            Sainik School, Imphal gave assignment to their students to write
            about this book. https://ssimphal.nic.in/pdf/Class%207%20sv.pdf
          </li>
          <li>Humans of Chhattisgarh</li>
        </ol>
      </div>
    </div>
  );
}

export default AboutBook;
