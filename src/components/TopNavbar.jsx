import React from "react";

const TopNavbar = () => {
  return (
    <div className="w-full bg-sky-100 text-slate-800 text-sm border-b border-sky-300">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex flex-col">
            <span className="font-bold text-sky-800">EMAIL</span>
            <p>smkn4bojonegoro@yahoo.co.id</p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex flex-col text-right">
            <span className="font-bold text-sky-800">BOJONEGORO</span>
            <p>Jalan Raya Surabaya, Sukowati, Kapas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
