import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0C0C4C] text-white py-10">
      <div className="container mx-auto px-6 md:px-16 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <img
              src={logo}
              alt="Logo SMKN 4 Bojonegoro"
              className="w-12 h-18"
            />
            <h2 className="text-xl font-bold">SMKN 4 Bojonegoro</h2>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Menciptakan Insan Unggul Berkarakter, Berprestasi, dan Berwawasan
            Lingkungan
          </p>
        </div>

        <div className="flex justify-between md:justify-around">
          <div>
            <h3 className="font-semibold mb-2">Pages</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>
                <Link href="#" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Sambutan
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Visi
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Misi
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Contact</h3>
            <p className="text-sm text-gray-300">
              Jalan Raya Surabaya,
              <br />
              Sukowati, Kab Bojonegoro 62181
            </p>
            <p className="text-sm text-gray-300 mt-2">
              smkn4bojonegoro@yahoo.co.id
            </p>
            <p className="text-sm text-gray-300">0353892418</p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Newsletter</h3>
          <p className="text-sm text-gray-300 mb-3">
            Subscribe our newsletter to get our latest update
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-3xs bg-white px-3 py-2 rounded-l-md text-black focus:outline-none"
            />
            <button className="bg-yellow-400 px-4 py-2 rounded-r-md text-black font-semibold">
              ➜
            </button>
          </div>
        </div>
      </div>

      <hr className="border-gray-600 my-6 mx-6 md:mx-16" />
      <p className="text-center text-sm text-gray-400">
        © d5uteam 2025 | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
