// PartnershipPage.jsx
import React, { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { fetchCompanies } from "../services/company";
import { storageUrl } from "../utils/storage";
import mascotCompany from "../assets/mascot-company.webp";
import logoHumma from "../assets/hummatech.webp";
import logoGamelab from "../assets/gamelab.webp";

const PartnershipPage = () => {
  const navigate = useNavigate();
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    fetchCompanies()
      .then((res) => {
        if (!mounted) return;

        // Cek struktur respons
        const companyList = res?.data?.data?.data ?? [];

        // Ganti foto pada urutan kedua & ketiga
        const updatedData = companyList.map((item, index) => {
          if (index === 1) return { ...item, photo: logoGamelab };
          if (index === 2) return { ...item, photo: logoHumma };
          return item;
        });

        setPartners(updatedData);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err.message || "Failed to load partners");
      })
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#eaf4f6] px-8 py-6">
      {/* Header */}
      <div className="bg-[#d7ebf5] rounded-lg p-6 mb-8 flex items-start gap-4">
        <button
          onClick={() => navigate(-1)}
          className="bg-[#c8dce2] p-2 rounded-full hover:bg-[#b9ced5] transition"
        >
          <ArrowLeft className="w-5 h-5 text-[#0b0b3b]" />
        </button>

        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-[#0b0b3b]">Partnership</h2>
          <p className="text-sm text-gray-600 max-w-xl mt-1">
            Partnership adalah halaman untuk perusahaan yang bekerja sama dengan SMK Negeri 4 Bojonegoro membagikan lowongan pekerjaan
          </p>
        </div>

        <img
          src={mascotCompany}
          alt="Partnership Illustration"
          className="w-28 h-28 object-contain"
        />
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-4 flex flex-col justify-between hover:shadow-lg transition"
          >
            <div className="w-full h-24 flex items-center justify-center border-b border-gray-200 mb-3">
              <img
                src={
                  partner.photo
                    ? partner.photo
                    : storageUrl(partner.logo ?? partner.image)
                }
                alt={partner.name}
                className="w-full h-full object-contain rounded-md"
              />
            </div>

            <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full w-fit mb-2">
              {partner.status ?? "Tersedia"}
            </span>

            <h3 className="font-semibold text-[#0b0b3b] text-sm mb-2">
              {partner.name}
            </h3>

            <p className="text-xs text-gray-600 mb-4">
              <strong>Alamat :</strong> <br />
              {partner.address}
            </p>

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
