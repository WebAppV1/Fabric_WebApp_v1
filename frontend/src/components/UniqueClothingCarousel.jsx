import React, { useRef } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const products = [
  {
    id: 1,
    name: "Designer Kurti",
    price: "₹999",
    imageUrl:
      "https://res.cloudinary.com/df4ibwoj5/image/upload/v1727952151/products/first.png",
  },
  {
    id: 2,
    name: "Stylish Tops",
    price: "₹799",
    imageUrl:
      "https://res.cloudinary.com/df4ibwoj5/image/upload/v1727952312/products/second.png",
  },
  {
    id: 3,
    name: "Embroidered Maxi Dress",
    price: "₹1200",
    imageUrl:
      "https://res.cloudinary.com/df4ibwoj5/image/upload/v1727952399/products/third.png",
  },
  {
    id: 4,
    name: "Printed Long Skirt",
    price: "₹850",
    imageUrl:
      "https://res.cloudinary.com/df4ibwoj5/image/upload/v1727952556/products/forth.png",
  },
  {
    id: 5,
    name: "Casual Tunic",
    price: "₹650",
    imageUrl:
      "https://static.cilory.com/681996-thickbox_default/lime-green-notch-neck-embroidred-rayon-tunic.jpg",
  },
  {
    id: 6,
    name: "Bohemian Kaftan",
    price: "₹1500",
    imageUrl:
      "https://res.cloudinary.com/df4ibwoj5/image/upload/v1727952996/products/Sixth.png",
  },
];

const UniqueClothingCarousel = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300, // Scroll by 300px to the left
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300, // Scroll by 300px to the right
      behavior: "smooth",
    });
  };

  return (
    <div className="relative flex flex-col items-center py-10 ">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 font-serif text-gray-800">
        Products
      </h2>

      {/* Scroll Buttons */}
      <button
        onClick={scrollLeft}
        className="hidden md:block absolute left-14 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full hover:bg-gray-400 focus:outline-none z-10
        "
      >
        <BsArrowLeftCircleFill size={25}/>
      </button>

      <button
        onClick={scrollRight}
        className="hidden md:block absolute right-14 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full hover:bg-gray-400 focus:outline-none z-10"
      >
        <BsArrowRightCircleFill  size={25}/>
      </button>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-8 px-4 scrollbar-hide w-full max-w-screen-xl "
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0 w-56 md:w-60 bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              className="w-full  md:h-72 h-auto object-cover"
              src={product.imageUrl}
              alt={product.name}
            />
            <div className="p-4 text-center">
              <h3 className="text-lg md:text-xl font-medium text-gray-900">
                {product.name}
              </h3>
              <p className="text-md md:text-lg font-bold text-gray-600 mt-2">
                {product.price}
              </p>
              <button className="bg-[#A5572F] text-white font-medium py-2 px-4 md:px-6 mt-3 rounded-full hover:bg-[#8f4727] transition duration-300 ease-in-out">
                🛒 Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniqueClothingCarousel;
