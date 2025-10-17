import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0C0C4C] text-white py-10">
      <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <div className="flex justify-center md:justify-start items-center space-x-3 mb-4">
            <img
              src={logo}
              alt="Logo SMKN 4 Bojonegoro"
              className="w-12 h-12"
            />
            <h2 className="text-xl font-bold">SMKN 4 Bojonegoro</h2>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Menciptakan Insan Unggul Berkarakter, Berprestasi, dan Berwawasan
            Lingkungan
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center md:justify-around gap-6">
          <div>
            <h3 className="font-semibold mb-2">Pages</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              {/* {["Home", "About", "Sambutan", "Visi", "Misi"].map((item, i) => ( */}
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white">
                  Tentang
                </Link>
              </li>
              <li>
                <Link to="/visi-misi" className="hover:text-white">
                  Visi Misi
                </Link>
              </li>
              <li>
                <Link to="/jurusan" className="hover:text-white">
                  Jurusan
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-white">
                  Berita
                </Link>
              </li>
              {/* ))} */}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Contact</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Jalan Raya Surabaya, Sukowati, Kab Bojonegoro 62181
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
            Subscribe untuk update terbaru kami
          </p>
          <div className="flex justify-center md:justify-start">
            <input
              type="email"
              placeholder="Email kamu..."
              className="w-3/4 sm:w-auto flex-grow bg-white px-3 py-2 rounded-l-md text-black focus:outline-none"
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
