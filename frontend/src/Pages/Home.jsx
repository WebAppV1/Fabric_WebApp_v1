import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ImageBody from "../components/ImageBody";
import AnimationName from "../components/AnimationName";
import Krutis from "../components/Krutis";
import Footer from "../components/Footer";
import { slides } from "../utils/cursorData.json";
import UniqueClothingCarousel from "../components/UniqueClothingCarousel";

const Home = () => {
  return (
    <>
      <Navbar />
      <ImageBody data={slides} />
      <Krutis />
      <UniqueClothingCarousel/>
      <Footer />
    </>
  );
};

export default Home;
