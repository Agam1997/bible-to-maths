import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./component/layout/Header/Header";
import Home from "./component/Home/Home";
import Footer from "./component/layout/Footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
