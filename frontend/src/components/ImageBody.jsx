import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "../components/styles/cursor.css";
import "../components/styles/animation.css";

const ImageBody = ({ data }) => {
  const [slide, setSlide] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const rotatingTexts = [
    "Find Your Best Krutis.",
    "Explore Persona Finery.",
    "With Style and Elegance.",
    "Discover Timeless Fashion.",
    "Elegance Tailored for You.",
    "Unleash Your Inner Beauty.",
    "Crafted with Perfection.",
    "Designed for Modern Royals.",
    "Embrace the Art of Dressing.",
    "Luxury Meets Comfort.",
    "Refined Fashion for Every Occasion.",
    "Curated Styles Just for You.",
    "Step into Unmatched Sophistication.",
  ]; 

  const textRef = useRef(null);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % rotatingTexts.length;
      const fullTxt = rotatingTexts[i];

      if (isDeleting) {
        setText(fullTxt.substring(0, text.length - 1));
      } else {
        setText(fullTxt.substring(0, text.length + 1));
      }

      setDelta(isDeleting ? 100 : 300 - Math.random() * 100);

      if (!isDeleting && text === fullTxt) {
        setTimeout(() => setIsDeleting(true), 500); // Wait before deleting
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const ticker = setTimeout(() => {
      handleTyping();
    }, delta);

    return () => clearTimeout(ticker);
  }, [text, isDeleting, loopNum, delta, rotatingTexts]);

  useEffect(() => {
    if (textRef.current) {
      gsap.to(textRef.current, { opacity: 1, duration: 1 });
    }
  }, [text]);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
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
      <h1
        className="font-mono text-center my-10 text-4xl text-slate-700"
        ref={textRef}
        style={{ opacity: 0 }}
      >
        <span className="wrap">{text}</span>
      </h1>
      <p className="w-5/6 bg-slate-200 h-1 rounded-xl"></p>
    </div>
  );
};

export default ImageBody;
