import React from "react";
import { Folder } from "lucide-react";
import { Link } from "react-router-dom";

const Jurusan = () => {
  const programKeahlian = [
    { kode: "TP", nama: "Teknik Pengelasan", path: "teknik-pengelasan" },
    { kode: "GP", nama: "Geologi Pertambangan", path: "geologi-pertambangan" },
    { kode: "RPL", nama: "Rekayasa Perangkat Lunak", path: "rekayasa-perangkat-lunak" },
    { kode: "PH", nama: "Perhotelan", path: "perhotelan" },
    { kode: "KL", nama: "Kuliner", path: "kuliner" },
    { kode: "ATR", nama: "Agribisnis Ternak Ruminansia", path: "agribisnis-ternak-ruminansia" },
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
          <Link
            key={index}
            to={`/${item.path}`}
            aria-label={`Lihat jurusan ${item.nama}`}
            className="bg-[#f5fcff] text-gray-900 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffd200]"
          >
            <Folder className="text-[#ffd200] w-10 h-10 mb-3 mx-auto" />
            <h3 className="text-xl font-bold text-center">{item.kode}</h3>
            <p className="text-sm text-gray-700 text-center">{item.nama}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Jurusan;
