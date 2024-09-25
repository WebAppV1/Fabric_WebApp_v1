import React from "react";
import "./styles/animation.css"

const Kruti = ({urls, Title}) => {
  return (
    <div className="h-80 w-80 flex rounded-3xl bg-[#f9e5ce] my-7 krutis-animation">
      <img src={urls} alt="cotton krutis" />
      <h1 className="font-serif font-bold">{Title}</h1>
    </div>
  );
};

export default Kruti;
