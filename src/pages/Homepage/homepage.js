import React from "react";
import Home from "../../component/Home/Home";
import { Helmet } from 'react-helmet';

function HomePage() {
  return (
    <>
    <Helmet>
        <title>Bible to Basic Mathematics by Pragati Agrawal</title>
        <meta name="title" content="Bible to Basic Mathematics by Pragati Agrawal" />
        <meta name="description" content="Bible to Basic Mathematics by Pragati Agrawal" />
        <meta property="og:title" content="Bible to Basic Mathematics by Pragati Agrawal" />
        <meta property="og:description" content="Bible to Basic Mathematics by Pragati Agrawal" />
      </Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap"
        rel="stylesheet"
      ></link>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
<link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative&display=swap" rel="stylesheet"></link>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link>
<link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"></link>

      <Home />
    </>
  );
}

export default HomePage;
