import React from "react";
import mainImage from "../assets/lks-livestock.png";
import news1 from "../assets/jobfair-2024.png";
import news2 from "../assets/foto-lulusan.png";

const NewsPage = () => {
  return (
    <section className="bg-[#F4FAFF] min-h-screen px-6 md:px-20 py-10">
      <div className="flex items-center space-x-2 mb-6">
        <button
          onClick={() => window.history.back()}
          className="text-2xl font-bold"
        >
          ←
        </button>
        <h1 className="text-3xl font-bold text-black">Berita</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <div className="relative">
            <img
              src={mainImage}
              alt="Siswa SMKN 4 Bojonegoro Juara 1 LKS"
              className="rounded-xl w-full"
            />
            <div className="absolute bottom-3 left-3 bg-yellow-400 text-center rounded-md px-3 py-2">
              <p className="font-semibold text-lg leading-none">16</p>
              <p className="text-sm">Ags, 2024</p>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-xl md:text-2xl font-bold mb-3">
              Siswa SMKN 4 Bojonegoro Raih Juara 1 LKS Jawa Timur Bidang
              Livestock
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bojonegoro – Prestasi membanggakan kembali ditorehkan oleh siswa
              SMKN 4 Bojonegoro. Dalam ajang Lomba Kompetensi Siswa (LKS) Jawa
              Timur 2025, salah satu siswa berhasil meraih Juara 1 di bidang
              Livestock.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Kompetisi bergengsi yang diikuti oleh puluhan peserta dari
              berbagai SMK se-Jawa Timur ini menjadi wadah unjuk kemampuan
              sekaligus pembuktian kualitas pendidikan vokasi. Bidang Livestock
              sendiri menekankan keterampilan dalam pengelolaan peternakan,
              mulai dari pemeliharaan, kesehatan hewan, hingga manajemen
              produksi.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Kepala SMKN 4 Bojonegoro menyampaikan rasa bangganya atas
              pencapaian tersebut. “Prestasi ini menjadi bukti bahwa siswa kami
              mampu bersaing di tingkat provinsi. Harapannya, ini bisa
              memotivasi teman-teman yang lain untuk terus berprestasi,”
              ujarnya.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex gap-4 items-center bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition">
            <img
              src={news1}
              alt="Job Fair"
              className="w-28 h-20 object-cover rounded-md"
            />
            <div>
              <span className="bg-yellow-400 text-xs px-2 py-1 rounded-md text-gray-800 font-semibold">
                28 Agustus 2024
              </span>
              <h3 className="text-sm font-bold mt-2">
                JOB FAIR & EDU FAIR 2024
              </h3>
              <p className="text-xs text-gray-500">
                Pelaksanaan job fair dan edu fair bersama PT. Humma Teknologi
                Indonesia
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-center bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition">
            <img
              src={news2}
              alt="Kelulusan"
              className="w-28 h-20 object-cover rounded-md"
            />
            <div>
              <span className="bg-yellow-400 text-xs px-2 py-1 rounded-md text-gray-800 font-semibold">
                15 Mei 2024
              </span>
              <h3 className="text-sm font-bold mt-2">KELULUSAN 451 SISWA</h3>
              <p className="text-xs text-gray-500">
                SMKN 4 Bojonegoro resmi meluluskan 451 siswa berprestasi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsPage;
