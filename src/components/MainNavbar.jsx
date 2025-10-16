import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import logo from "../assets/logo.png";

const MainNavbar = () => {
  const [isProgramOpen, setIsProgramOpen] = useState(false);

  return (
    <nav className="sticky top-[40px] z-60 flex justify-center">
      <div className="bg-indigo-950 text-white rounded-full px-10 py-3 flex items-center justify-between w-4/5 shadow-lg relative">
        <div className="flex items-center space-x-3">
          <img src={logo} className="w-8 h-12" />
          <span className="font-semibold text-lg">SMKN 4 Bojonegoro</span>
        </div>

        <ul className="hidden md:flex space-x-6 text-sm items-center">
          <li>
            <a href="/" className="hover:text-yellow-400">
              Beranda
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-yellow-400">
              Tentang
            </a>
          </li>
          <li>
            <a href="/visi-misi" className="hover:text-yellow-400">
              Visi Misi
            </a>
          </li>
          <li>
            <a href="/jurusan" className="hover:text-yellow-400">
              Jurusan
            </a>
          </li>

          <li className="relative">
            <button
              onClick={() => setIsProgramOpen(!isProgramOpen)}
              className="flex items-center space-x-1 hover:text-yellow-400 focus:outline-none"
            >
              <span>Program</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  isProgramOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isProgramOpen && (
              <ul className="absolute bg-white text-indigo-950 rounded-md shadow-md mt-2 py-2 w-40">
                <li>
                  <a
                    href="/cekkelulusan"
                    className="block px-4 py-2 hover:bg-yellow-100 transition"
                  >
                    Cek Kelulusan
                  </a>
                </li>
                <li>
                  <a
                    href="/partnership"
                    className="block px-4 py-2 hover:bg-yellow-100 transition"
                  >
                    Partnership
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li>
            <a href="/alumni" className="hover:text-yellow-400">
              Lulusan
            </a>
          </li>
          <li>
            <a href="/news" className="hover:text-yellow-400">
              Berita
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
