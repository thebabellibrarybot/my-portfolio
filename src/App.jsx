import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Paintings from "./components/Paintings";
import Books from "./components/Books";
import Bio from "./components/Bio";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paintings" element={<Paintings />} />
        <Route path="/books" element={<Books />} />
        <Route path="/bio" element={<Bio />} />
      </Routes>
    </>
  );
}

export default App;