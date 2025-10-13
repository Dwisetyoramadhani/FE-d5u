import React from "react";

const VisiMisi = () => {
  return (
    <section className="bg-[#f5fcff] py-16 px-6 md:px-20 text-center">
      {/* Visi */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="flex justify-between items-start mb-4">
          <span className="text-4xl text-[#1d1a56] font-bold">“</span>
          <span className="text-4xl text-[#1d1a56] font-bold">”</span>
        </div>

        <p className="text-gray-800 font-semibold leading-relaxed">
          Menjadi SMK unggulan dalam prestasi yang dilandasi iman, taqwa,
          berakhlak mulia, serta menghasilkan tamatan yang mampu bersaing di
          pasaran kerja pada tingkat Regional, Nasional, dan Global serta peduli
          dan bertanggung jawab terhadap pelestarian lingkungan.
        </p>

        <p className="italic text-gray-700 mt-4 font-medium">
          - Visi SMKN 4 Bojonegoro
        </p>
      </div>

      {/* Misi */}
      <div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8">
          MISI
        </h2>

        <div className="space-y-4 max-w-3xl mx-auto">
          <div className="bg-[#1d1a56] text-white py-3 px-6 rounded-lg font-medium">
            Menanamkan keimanan, ketakwaan, dan akhlak mulia dalam seluruh
            aktivitas pendidikan.
          </div>

          <div className="bg-[#ffd200] text-gray-900 py-3 px-6 rounded-lg font-medium">
            Meningkatkan mutu pendidikan dan prestasi siswa.
          </div>

          <div className="bg-[#1d1a56] text-white py-3 px-6 rounded-lg font-medium">
            Menyiapkan lulusan yang kompeten dan siap bersaing di tingkat
            regional, nasional, dan global.
          </div>

          <div className="bg-[#ffd200] text-gray-900 py-3 px-6 rounded-lg font-medium">
            Membangun kepedulian serta tanggung jawab terhadap lingkungan.
          </div>

          <div className="bg-[#1d1a56] text-white py-3 px-6 rounded-lg font-medium">
            Menumbuhkan budaya disiplin, kerja keras, dan tanggung jawab pada
            seluruh warga sekolah.
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;
