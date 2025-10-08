import React from "react";

const TopNavbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-sky-100 text-slate-800 text-xs z-50 border-b border-sky-300">
      <div className="max-w-7xl mx-auto px-4 py-1 flex justify-between items-center">
        {/* Kiri - Email */}
        <div className="flex items-center space-x-2">
          <div className="flex flex-col">
            <span className="font-semibold text-sky-800">EMAIL</span>{" "}
            <span className="text-gray-700">loremipsum@gmail.com</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex flex-col">
            <span className="font-semibold text-sky-800">BOJONEGORO</span>
            <a
              href="#"
              className="text-gray-700 hover:text-sky-700 underline underline-offset-2"
            >
              Jalan Raya Surabaya, Sukowati, Kapas, Sukowati, Kec. Kapas
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
