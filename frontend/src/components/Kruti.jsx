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
      <div class="flex justify-center items-baseline my-8">
        <span class="mr-2 text-2xl font-extrabold">$29</span>
        <span class="text-gray-500 dark:text-gray-400">/Offer</span>
      </div>
      <button class="bg-transparent border border-gray-800 text-gray-800 font-serif text-lg tracking-wide py-3 px-8 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 ease-in-out shadow-md">
        Buy Now
      </button>
    </div>
  );
};

export default Kruti;
