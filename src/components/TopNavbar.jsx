import React from "react";

const TopNavbar = () => {
  return (
    <div className="w-full bg-sky-100 text-slate-800 text-sm border-b border-sky-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 text-center sm:text-left">
        {/* Email Section */}
        <div className="flex items-center">
          <div className="flex flex-col">
            <span className="font-bold text-sky-800 uppercase tracking-wide">
              Email
            </span>
            <p className="text-slate-700 break-all">
              smkn4bojonegoro@yahoo.co.id
            </p>
          </div>
        </div>

        {/* Location Section */}
        <div className="flex items-center">
          <div className="flex flex-col sm:text-right">
            <span className="font-bold text-sky-800 uppercase tracking-wide">
              Bojonegoro
            </span>
            <p className="text-slate-700">
              Jalan Raya Surabaya, Sukowati, Kapas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
