import React, { useState } from "react";

import "../components/styles/cursor.css";

import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const ImageBody = ({ data }) => {
  const [slide, Setslide] = useState(0);
  const nextSlide = () => {
    Setslide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    Setslide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="ImageProvider">
      <div className="carousel">
        <BsArrowLeftCircleFill
          className="arrow arrow-left "
          onClick={prevSlide}
        />
        {data.map((item, idx) => {
          return (
            <img
              src={item.src}
              alt={item.alt}
              key={idx}
              className={slide === idx ? "slide" : "slide-hidden"}
            />
          );
        })}
        <BsArrowRightCircleFill
          className="arrow arrow-right"
          onClick={nextSlide}
        />
        <span className="indicators">
          {data.map((_, idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  Setslide(idx);
                }}
                className={slide === idx ? "indicator" : "indicator-inactive"}
              ></button>
            );
          })}
        </span>
      </div>
    </div>
  );
};

export default ImageBody;
