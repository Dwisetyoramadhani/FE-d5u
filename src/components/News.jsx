import React from "react";
import lks from "../assets/lks-livestock.png";
import jobfair from "../assets/jobfair-2024.png";
import lulusan from "../assets/foto-lulusan.png";

const News = () => {
  const newsData = [
    {
      date: "Agustus 16, 2024",
      title: "SMKN 4 Bojonegoro Meraih Juara 1 LKS Live Stok Tingkat Provinsi",
      desc: "",
      category: "Prestasi",
      image: lks,
    },
    {
      date: "Agustus 28, 2024",
      title: "JobFair & Edufair Hadir di SMKN 4 Bojonegoro!",
      desc: "SMKN 4 Bojonegoro mengadakan Job Fair & Edu Fair untuk membantu anak........",
      category: "Informasi",
      image: jobfair,
    },
    {
      date: "Mei 15, 2025",
      title: "SMKN 4 Bojonegoro Luluskan 451 Siswa Berprestasi",
      desc: "Pada Mei tanggal 15 tahun 2025, SMKN 4 Bojonegoro resmi meluluskan ..........",
      category: "Informasi",
      image: lulusan,
    },
  ];
  return (
    <section className="bg-[#0B0D52] py-16 px-8 text-white">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-3">BERITA</h2>
        <p className="text-gray-200 text-lg max-w-2xl mx-auto">
          Temukan berita terkini terkait SMK Negeri 4 Bojonegoro yang menarik
          dan ter-update
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Cari berita"
          className="w-full max-w-xl bg-white px-6 py-3 rounded-lg text-gray-800 text-base outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
        {newsData.map((item, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <p className="text-gray-600 text-sm mb-1">{item.date}</p>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              {item.desc && (
                <p className="text-gray-700 text-sm mb-3">{item.desc}</p>
              )}
              <p className="text-sm font-medium text-gray-800">
                {item.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
