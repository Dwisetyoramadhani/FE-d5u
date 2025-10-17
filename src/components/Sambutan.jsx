import React from "react";
import kepsek from "../assets/kepsek.png";

const Sambutan = () => {
  return (
    <section className="bg-[#0b0b4f] text-white py-10 px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 text-center md:text-left">
        <div className="flex-shrink-0">
          <img
            src={kepsek}
            alt="Kepala Sekolah SMKN 4 Bojonegoro"
            className="w-56 sm:w-64 md:w-72 mx-auto"
          />
        </div>
        <div>
          <p className="leading-relaxed text-gray-100 mb-6">
            Assalamu’alaikum warahmatullahi wabarakatuh,
            <br />
            Selamat datang di website resmi SMKN 4 Bojonegoro. Kami hadirkan
            informasi kegiatan dan prestasi sekolah untuk siswa, orang tua, dan
            masyarakat.
            <br />
            <br />
            Sebagai sekolah vokasi, kami berkomitmen mencetak lulusan terampil,
            berkarakter, dan siap bersaing di dunia kerja.
            <br />
            <br />
            Wassalamu’alaikum warahmatullahi wabarakatuh.
          </p>

          <h3 className="text-xl font-bold text-[#ffd200]">
            Abdul Fattah, S.Pd., M.MPd
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Sambutan;
