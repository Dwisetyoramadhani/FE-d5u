import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const MainNavbar = () => {
  const [isProgramOpen, setIsProgramOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-5 z-40 flex justify-center transition-all duration-500 ${
        scrolled ? "py-2 bg-transparent" : "py-0 bg-transparent"
      }`}
    >
      <div
        className={`${
          scrolled
            ? "bg-indigo-950 text-white rounded-full w-11/12 md:w-4/5 shadow-lg"
            : "bg-indigo-950 text-white w-full rounded-none"
        } transition-all duration-500 px-6 md:px-10 py-3 flex items-center justify-between relative`}
      >
        <div className="flex items-center space-x-3">
          <img src={logo} className="w-8 h-12" alt="logo" />
          <Link to="/" className="font-semibold text-lg">
            SMKN 4 Bojonegoro
          </Link>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul
          className={`${
            isMenuOpen
              ? "flex flex-col absolute top-full left-0 bg-indigo-950 w-full p-6 space-y-4 rounded-b-2xl md:hidden"
              : "hidden md:flex space-x-6"
          } text-sm items-center md:static`}
        >
          <li>
            <Link to="/" className="hover:text-yellow-400">
              Beranda
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-400">
              Tentang
            </Link>
          </li>
          <li>
            <Link to="/visi-misi" className="hover:text-yellow-400">
              Visi Misi
            </Link>
          </li>
          <li>
            <Link to="/jurusan" className="hover:text-yellow-400">
              Jurusan
            </Link>
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
              <ul className="absolute bg-white text-indigo-950 rounded-md shadow-md mt-2 py-2 w-40 z-50">
                <li>
                  <Link
                    to="/cekkelulusan"
                    className="block px-4 py-2 hover:bg-yellow-100 transition"
                  >
                    Cek Kelulusan
                  </Link>
                </li>
                <li>
                  <Link
                    to="/partnership"
                    className="block px-4 py-2 hover:bg-yellow-100 transition"
                  >
                    Partnership
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/alumni" className="hover:text-yellow-400">
              Lulusan
            </Link>
          </li>
          <li>
            <Link to="/news" className="hover:text-yellow-400">
              Berita
            </Link>
          </li>

          <li className="block md:hidden">
            <button
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "mailto:smkn4bojonegoro@yahoo.co.id",
                  "_self",
                  "noopener,noreferrer"
                );
              }}
              type="button"
              className="inline-block bg-yellow-400 text-indigo-950 font-semibold px-5 py-2 rounded-full hover:bg-yellow-300 transition focus:outline-none focus:ring-2 focus:ring-yellow-200"
            >
              Contact Us
            </button>
          </li>
        </ul>

        <button
          onClick={(e) => {
            e.preventDefault();
            window.open(
              "mailto:smkn4bojonegoro@yahoo.co.id",
              "_self",
              "noopener,noreferrer"
            );
          }}
          type="button"
          className="hidden md:inline-block bg-yellow-400 text-indigo-950 font-semibold px-5 py-2 rounded-full hover:bg-yellow-300 transition focus:outline-none focus:ring-2 focus:ring-yellow-200"
        >
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default MainNavbar;
