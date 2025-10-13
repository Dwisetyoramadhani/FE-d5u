import React from "react";
import bg from "../assets/bg-smk.png";

const About = () => {
  return (
    <section className="bg-[#f8fcff] py-16 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0b2254] mb-4 border-l-4 border-[#0b2254] pl-3">
            TENTANG SMKN 4
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            SMKN 4 Bojonegoro adalah Sekolah Menengah Kejuruan yang berkomitmen
            mencetak lulusan berkualitas, terampil, dan siap bersaing di dunia
            kerja maupun melanjutkan pendidikan ke jenjang lebih tinggi. Berdiri
            dengan semangat Link and Match antara dunia pendidikan dengan dunia
            usaha dan dunia industri (DUDI), SMKN 4 Bojonegoro terus berinovasi
            dalam memberikan pendidikan berbasis vokasi yang relevan dengan
            kebutuhan zaman.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mt-6">
            <div>
              <h3 className="text-lg font-bold text-[#0b2254]">6 Jurusan</h3>
              <p className="text-gray-600 text-sm">
                Pilihan keahlian sesuai minat dan bakat.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#0b2254]">Fasilitas</h3>
              <p className="text-gray-600 text-sm">
                Laboratorium & sarana praktik modern.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#0b2254]">
                Dunia Industri
              </h3>
              <p className="text-gray-600 text-sm">
                Link and Match dengan industri dan usaha.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-extrabold text-[#0b2254]">
              SMKN 4 Bojonegoro
            </h3>
            <p className="text-gray-700 italic">
              “Sekolah Vokasi Unggulan, Siap Kerja, Siap Kuliah, Siap
              Wirausaha.”
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={bg}
            alt="SMKN 4 Bojonegoro"
            className="rounded-xl shadow-lg w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
