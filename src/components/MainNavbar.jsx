import React from "react";

const MainNavbar = () => {
  return (
    <nav className="sticky top-[40px] z-60 flex justify-center">
      <div className="bg-indigo-950 text-white rounded-full px-10 py-3 flex items-center justify-between w-4/5 shadow-lg">
        <div className="flex items-center space-x-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0f/SMK_Logo.png"
            alt="Logo"
            className="w-8 h-8"
          />
          <span className="font-semibold text-lg">SMKN 4 Bojonegoro</span>
        </div>

        <ul className="hidden md:flex space-x-6 text-sm">
          <li>
            <a href="#" className="hover:text-yellow-400">
              Beranda
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">
              Tentang
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">
              Sambutan
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">
              Visi Misi
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">
              Jurusan
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">
              Program
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">
              Lulusan
            </a>
          </li>
        </ul>

        <button className="bg-yellow-400 text-indigo-950 font-semibold px-5 py-2 rounded-full hover:bg-yellow-300 transition">
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default MainNavbar;
