import React from "react";
import { Folder } from "lucide-react";

const Jurusan = () => {
  const programKeahlian = [
    { kode: "TP", nama: "Teknik Pengelasan" },
    { kode: "GP", nama: "Geologi Pertambangan" },
    { kode: "RPL", nama: "Rekayasa Perangkat Lunak" },
    { kode: "PH", nama: "Perhotelan" },
    { kode: "KL", nama: "Kuliner" },
    { kode: "ATR", nama: "Agribisnis Ternak Ruminansia" },
  ];

  return (
    <section className="bg-[#0b0b4f] text-white py-20 px-6 md:px-20 text-center">
      <h3 className="text-[#ffd200] text-lg font-semibold tracking-wide mb-2">
        JURUSAN
      </h3>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
        SMKN 4 Bojonegoro
      </h2>
      <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed mb-12">
        Kami memiliki berbagai program keahlian dengan dukungan fasilitas modern
        dan tenaga pengajar kompeten.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
        {programKeahlian.map((item, index) => (
          <div
            key={index}
            className="bg-[#f5fcff] text-gray-900 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          >
            <Folder className="text-[#ffd200] w-10 h-10 mb-3 mx-auto" />
            <h3 className="text-xl font-bold">{item.kode}</h3>
            <p className="text-sm text-gray-700">{item.nama}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Jurusan;
