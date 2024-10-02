import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import AnimationName from "./components/AnimationName";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/GetStarted" element={<Home />} />
        <Route exact path="/" element={<AnimationName />} />
      </Routes>
    </Router>
  );
}

export default App;
