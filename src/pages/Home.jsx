import React from "react";
import bgImage from "../assets/bg-smk.webp";

const Home = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center pt-0 mt-0 overflow-hidden">
      {/* Hero image for better LCP handling */}
      <img
        src={bgImage}
        alt="Latar SMKN 4 Bojonegoro"
        width={1920}
        height={1080}
        fetchpriority="high"
        loading="eager"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-3">
          Selamat Datang Di SMKN 4 Bojonegoro
        </h1>
        <h1 className="text-sm md:text-xl mb-6">
          “Sekolah Vokasi Unggulan, Siap Kerja, Siap Kuliah, Siap Wirausaha.”
        </h1>
        {/* <div className="bg-white rounded-full shadow-md flex items-center px-4 py-2 w-full md:w-[600px] mx-auto">
          <input
            type="text"
            placeholder="Apa yang ingin anda cari?"
            className="flex-1 outline-none text-gray-600 bg-transparent px-2"
          />
          <button className="text-indigo-950 font-semibold">🔍</button>
        </div> */}
      </div>
    </section>
  );
};

export default Home;
