import React from "react";
import { RxDropdownMenu } from "react-icons/rx";
import { FaInstagramSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative bg-footer-bg py-10 font-serif font-thin">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 p-5">
        <div className="mx-6">
          <h1 className="font-bold my-2">USEFUL LINKS</h1>
          <ul className="space-y-2">
            <li>PRIVACY POLICY</li>
            <li>KRUTIS</li>
            <li>ABOUT US</li>
            <li>VIDEOS</li>
            <li className="flex items-center gap-2">
              <RxDropdownMenu size={20} />
              MORE
            </li>
          </ul>
        </div>

        <div className="my-10 font-semibold md:my-0">
          <ul className="space-y-2">
            <li>Home</li>
            <li>KRUTIS</li>
            <li>Discount</li>
            <li>ABOUT US</li>
          </ul>
        </div>

        <div className="mx-6">
          <h1 className="font-bold my-2">CONTACT</h1>
          <p className="leading-6">
            Palm Court Bldg M, 501/B, 5th Floor,
            <br />
            New Link Road, Beside Goregaon Sports
            <br /> Complex, Malad West, Mumbai, 400064,
            <br /> Maharashtra
            <br />
            +91-8888888888
            <br />
            websupport@justdial.com
          </p>
        </div>

        <div className="mx-6">
          <h1 className="font-bold text-lg text-center my-2">Connect</h1>
          <div className="flex justify-center gap-4 mt-4">
            <a href="#" target="_blank">
              <FaFacebook size={30} />
            </a>
            <a href="#" target="_blank">
              <FaInstagramSquare size={30} />
            </a>
            <a href="#" target="_blank">
              <BsLinkedin size={30} />
            </a>
            <a href="#" target="_blank">
              <FaSquareXTwitter size={30} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
