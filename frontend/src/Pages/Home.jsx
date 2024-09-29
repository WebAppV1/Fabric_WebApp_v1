import React from "react";
import Navbar from "../components/Navbar";
import ImageBody from "../components/ImageBody";
import AnimationName from "../components/AnimationName";

import { slides } from "../utils/cursorData.json";
import Krutis from "../components/Krutis";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div>
      <Navbar />
      {/* Navbar is successfully created */}
      <AnimationName />
      <ImageBody data={slides} />
      <Krutis />
      <Footer/>
    </div>
  );
};

export default Home;
