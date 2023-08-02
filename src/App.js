import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./component/layout/Header/Header";
import HomePage from "./pages/Homepage/homepage";
import Footer from "./component/layout/Footer/Footer";
import AboutBook from "./component/About-Book/AboutBook";
import AboutAuthor from "./component/About-Author/AboutAuthor";
import Contact from "./component/Contact-us/Contact";
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="app">
      <div>
      <Helmet>
        <title>Bible to Basic Mathematics by Pragati Agrawal</title>
        <meta name="title" content="Bible to Basic Mathematics by Pragati Agrawal" />
        <meta name="description" content="Bible to Basic Mathematics by Pragati Agrawal" />
        <meta property="og:title" content="Bible to Basic Mathematics by Pragati Agrawal" />
        <meta property="og:description" content="Bible to Basic Mathematics by Pragati Agrawal" />
      </Helmet>
      {/* Rest of your component code */}
    </div>
      <BrowserRouter>
      
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-book" element={<AboutBook />} />
          <Route path="/about-author" element={<AboutAuthor />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <Home /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
