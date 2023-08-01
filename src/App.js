import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./component/layout/Header/Header";
import HomePage from "./pages/Homepage/homepage";
import Footer from "./component/layout/Footer/Footer";
import AboutBook from "./component/About-Book/AboutBook";
import AboutAuthor from "./component/About-Author/AboutAuthor";
import Contact from "./component/Contact-us/Contact";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <head>
      <title>सेंट जोसेफ हिंदी मीडियम स्कूल</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <meta content="Best CG Board Hindi Medium School in Bilaspur, Chhattisgarh. | St. Joseph Convent Hindi Medium School" name="title" />
    <meta content="St. Joseph Convent School Hindi medium is best for girls in Bilaspur offering high level CG board education with affordable school fees." name="description" />
      </head>
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
