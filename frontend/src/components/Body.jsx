import React, { useRef } from "react";
import { sample_Images } from "../utils/images.js";

const Body = () => {
  const containerRef = useRef();

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className=" p-2 flex flex-col items-center">
      <div className="flex justify-between w-full mb-4">
        <button onClick={scrollLeft} className="p-2 bg-gray-200 rounded">Left</button>
        <button onClick={scrollRight} className="p-2 bg-gray-200 rounded">Right</button>
      </div>
      <div
        ref={containerRef}
        className="overflow-x-auto scroll-smooth w-full"
        style={{
          maxWidth: "1200px", // Set a maximum width for larger screens
        }}
      >
        <div className="flex justify-center gap-2 h-96 scrollbar-hide">
          {sample_Images.map((item, index) => (
            <img
              key={index}
              src={item}
              alt={`Image ${index + 1}`}
              className="w-60 h-auto rounded-lg m-2 flex-shrink-0" // Ensure images don't shrink
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
