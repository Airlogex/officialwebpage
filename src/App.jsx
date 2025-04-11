import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import Home from "./component/Home";
import Track from "./component/Track";
import Contact from "./component/Contact";
import "./i18n/config";
import Footer from "./component/Footer";
import "./App.css";

function App() {
  const [isloading, setisloading] = useState(true);

  useEffect(() => {
    setisloading(false);
  }, []);

  return (
    <Router>
      {isloading ? (
        <div style={{ height: "100vh", width: "100vw", justifyContent: "center", alignItems: "center", backgroundColor: "navy" }}>
          <p>loading please wait</p>
        </div>
      ) : (
        <div className="main-containe">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/track" element={<Track />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
