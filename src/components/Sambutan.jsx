import React from "react";
import kepsek from "../assets/kepsek.png";

const Sambutan = () => {
  return (
    <section className="bg-[#0b0b4f] text-white py-5 px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex-shrink-0">
          <img
            src={kepsek}
            alt="Kepala Sekolah SMKN 4 Bojonegoro"
            className="w-64 md:w-72s"
          />
        </div>
        <div>
          <p className="leading-relaxed text-gray-100 mb-6">
            Assalamu’alaikum warahmatullahi wabarakatuh,
            <br />
            Selamat datang di website resmi SMKN 4 Bojonegoro. Melalui media ini
            kami ingin menghadirkan informasi seputar kegiatan, prestasi, dan
            program sekolah agar dapat diakses oleh siswa, orang tua, maupun
            masyarakat luas.
            <br />
            <br />
            Sebagai sekolah vokasi, kami berkomitmen mencetak lulusan yang
            terampil, berkarakter, dan siap bersaing di dunia kerja maupun
            pendidikan tinggi. Semoga website ini menjadi jendela informasi
            sekaligus sarana komunikasi yang bermanfaat bagi kita semua.
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
