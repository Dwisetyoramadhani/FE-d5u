import React from "react";

const VisiMisi = () => {
  return (
    <section className="bg-[#f5fcff] py-12 px-4 sm:px-8 md:px-20 text-center">
      <div className="max-w-4xl mx-auto mb-16">
        <div className="flex justify-between items-start mb-4">
          <span className="text-4xl text-[#1d1a56] font-bold">“</span>
          <span className="text-4xl text-[#1d1a56] font-bold">”</span>
        </div>

        <p className="text-gray-800 font-semibold leading-relaxed">
          Menjadi SMK unggulan dalam prestasi yang dilandasi iman, taqwa,
          berakhlak mulia, serta menghasilkan tamatan yang mampu bersaing di
          tingkat global.
        </p>

        <p className="italic text-gray-700 mt-4 font-medium">
          - Visi SMKN 4 Bojonegoro
        </p>
      </div>

      <div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8">
          MISI
        </h2>

        <div className="space-y-4 max-w-3xl mx-auto">
          {[
            "Menanamkan keimanan dan akhlak mulia.",
            "Meningkatkan mutu pendidikan dan prestasi siswa.",
            "Menyiapkan lulusan yang kompeten dan siap bersaing.",
            "Membangun kepedulian terhadap lingkungan.",
            "Menumbuhkan budaya disiplin dan tanggung jawab.",
          ].map((item, i) => (
            <div
              key={i}
              className={`py-3 px-6 rounded-lg font-medium ${
                i % 2 === 0
                  ? "bg-[#1d1a56] text-white"
                  : "bg-[#ffd200] text-gray-900"
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;
