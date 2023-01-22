import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./component/layout/Header/Header";
import HomePage from "./pages/Homepage/homepage";
import Footer from "./component/layout/Footer/Footer";
import AboutBook from "./component/About-Book/AboutBook";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-book" element={<AboutBook />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <Home /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
