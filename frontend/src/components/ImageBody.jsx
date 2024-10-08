import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import React, { useState } from "react";
import "../components/styles/cursor.css";
import "../components/styles/animation.css";

const ImageBody = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const handleClassNames = (idx) => {
    if (slide === idx) return "slide current";
    if (slide === idx - 1 || (slide === data.length - 1 && idx === 0)) {
      return "slide next";
    }
    if (slide === idx + 1 || (slide === 0 && idx === data.length - 1)) {
      return "slide prev";
    }
    return "slide-hidden";
  };

  return (
    <div className="ImageProvider">
      <div className="carousel">
        <BsArrowLeftCircleFill
          className="arrow arrow-left"
          onClick={prevSlide}
        />
        {data.map((item, idx) => (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={handleClassNames(idx)}
          />
        ))}
        <BsArrowRightCircleFill
          className="arrow arrow-right"
          onClick={nextSlide}
        />
        <span className="indicators">
          {data.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSlide(idx)}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
            ></button>
          ))}
        </span>
      </div>
    </div>
  );
};

export default ImageBody;
