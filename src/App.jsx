import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Shop from "./components/Shop";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="md:bg-[url('/bg.jpg')] bg-[url('/bg-mobile.jpg')] bg-no-repeat bg-cover h-screen bg-center">
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
