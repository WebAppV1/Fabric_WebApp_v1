import React, { useState } from "react";
import { FcBusinesswoman } from "react-icons/fc";
import { FaShippingFast } from "react-icons/fa";
import { TbShoppingCartShare } from "react-icons/tb";
import { GiAmpleDress } from "react-icons/gi";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="border-gray-200 bg-[#f6c389] text-[#2c2f48] w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 gap-1">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="../../assets/logo.png"
            className="h-16"
            alt="Flowbite Logo"
          />
          <span
            style={{ fontFamily: "-moz-initial" }}
            className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white"
          >
            Persona Finery
          </span>
        </a>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="flex text-sm bg-gray-800 rounded-full focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded={dropdownOpen}
            onClick={toggleDropdown}
          >
            <span className="sr-only">Open user menu</span>
            <div className="w-8.5 h-8.5 m-1.2 rounded-full flex items-center justify-center ">
              <FcBusinesswoman size={24} />
            </div>
          </button>
          {dropdownOpen && (
            <div className="z-50 my-6 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                  name@flowbite.com
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                {/* Dropdown Items */}
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Your Orders
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Track Order's <FaShippingFast />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          )}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={toggleNav}
            aria-controls="navbar-user"
            aria-expanded={navOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            navOpen ? "" : "hidden"
          }`}
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
            {/* Nav Items */}
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-[#2c2f48] bg-transparent rounded md:bg-transparent md:text-[#2c2f48] md:p-0 hover:text-[#6e8fb9] md:hover:text-[#6e8fb9] md:dark:text-[#2c2f48]"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-1 py-2 px-3 text-[#2c2f48] rounded hover:bg-transparent md:hover:bg-transparent md:hover:text-[#6e8fb9] md:p-0 dark:text-[#2c2f48] md:dark:hover:text-[#6e8fb9] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                <GiAmpleDress /> Kurtis
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-[#2c2f48] rounded hover:bg-transparent md:hover:bg-transparent md:hover:text-[#6e8fb9] md:p-0 dark:text-[#2c2f48] md:dark:hover:text-[#6e8fb9] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Discounts
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-[#2c2f48] rounded hover:bg-transparent md:hover:bg-transparent md:hover:text-[#6e8fb9] md:p-0 dark:text-[#2c2f48] md:dark:hover:text-[#6e8fb9] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="py-2 px-3 text-[#2c2f48] rounded hover:bg-transparent md:hover:bg-transparent md:hover:text-[#6e8fb9] md:p-0 dark:text-[#2c2f48] md:dark:hover:text-[#6e8fb9] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                <TbShoppingCartShare
                  size={25}
                  onClick={() => {
                    setNavOpen(false);
                  }}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
