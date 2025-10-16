import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const partners = [
  {
    id: 1,
    name: "PT. Educa Sisfomedia Indonesia",
    logo: "/assets/gamelab.png",
    status: "Tersedia",
    address:
      "Jl. Glirirejo No.10, Gondongan, Kec. Tingkir, Kota Salatiga, Jawa Tengah 50743",
  },
  {
    id: 2,
    name: "PT. Humma Teknologi Indonesia",
    logo: "/",
    status: "Tersedia",
    address:
      "Jl. Ngadiluwih, Kedungpedaringan, Kec. Kepanjen, Kabupaten Malang, Jawa Timur 65163, Indonesia",
  },
  {
    id: 3,
    name: "PT. Educa Sisfomedia Indonesia",
    logo: "/",
    status: "Tersedia",
    address:
      "Jl. Ngadiluwih, Kedungpedaringan, Kec. Kepanjen, Kabupaten Malang, Jawa Timur 65163, Indonesia",
  },
];

const PartnershipPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#eaf4f6] px-8 py-6 relative">
      {/* Tombol Kembali */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 bg-[#d7e5eb] p-2 rounded-full hover:bg-[#c8dce2] transition"
      >
        <ArrowLeft className="w-5 h-5 text-[#0b0b3b]" />
      </button>

      {/* Header */}
      <div className="bg-[#d7ebf5] rounded-lg p-6 flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-semibold text-[#0b0b3b]">Partnership</h2>
          <p className="text-sm text-gray-600 max-w-xl mt-1">
            Partnership adalah halaman untuk perusahaan yang bekerja sama dengan
            SMK Negeri 4 Bojonegoro membagikan lowongan pekerjaan
          </p>
        </div>
        <img
          src="/assets/partner-illustration.png"
          alt="Partnership Illustration"
          className="w-28 h-28 object-contain"
        />
      </div>

      {/* Grid Kartu */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="bg-white shadow-md rounded-xl p-4 flex flex-col justify-between hover:shadow-lg transition"
          >
            {/* Logo */}
            <div className="w-full h-24 flex items-center justify-center border-b border-gray-200 mb-3">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 object-contain"
              />
            </div>

            {/* Status */}
            <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full w-fit mb-2">
              {partner.status}
            </span>

            {/* Nama */}
            <h3 className="font-semibold text-[#0b0b3b] text-sm mb-2">
              {partner.name}
            </h3>

            {/* Alamat */}
            <p className="text-xs text-gray-600 mb-4">
              <strong>Alamat :</strong> <br />
              {partner.address}
            </p>

            {/* Tombol */}
            <button className="bg-[#1d70d1] hover:bg-[#1558a1] text-white text-sm rounded-md py-2 transition">
              Lihat Detail
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnershipPage;
