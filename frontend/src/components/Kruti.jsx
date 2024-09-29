import React from "react";
import "./styles/animation.css";

const Kruti = ({ urls, Title }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center rounded-3xl bg-[#f9e5ce] my-7 krutis-animation">
      <img
        src={urls}
        alt="cotton krutis"
        className="h-30 w-full md:w-80 object-cover rounded-lg"
      />
      <h1 className="font-serif font-bold text-center mt-4">{Title}</h1>
    </div>
  );
};

export default Kruti;
