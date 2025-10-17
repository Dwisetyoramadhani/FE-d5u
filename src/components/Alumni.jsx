import React from "react";
import { Link } from "react-router-dom";

const Alumni = () => {
  const alumni = [
    {
      name: "M. Khoyron Ahlaqul Firdaus",
      achievements: "69+ Prestasi",
      image:
        "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Rafie Danial Faturrahman",
      achievements: "69+ Prestasi",
      image:
        "https://images.unsplash.com/photo-1598257006626-48b0c252070d?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Nasril Ilham Saputra",
      achievements: "69+ Prestasi",
      image:
        "https://images.unsplash.com/photo-1573496529574-be85d6a60704?auto=format&fit=crop&w=800&q=80",
    },
  ];
  return (
    <section className="bg-blue-50 border-2 border-blue-500 p-10 rounded-lg">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-4xl font-bold text-black mb-2">Profil Alumni</h2>
          <p className="text-gray-700 max-w-md">
            Temukan alumni SMKN 4 Bojonegoro yang kompeten dan siap bekerja
            untuk perusahaanmu
          </p>
        </div>
        <Link
          to="/alumni"
          className="bg-indigo-900 text-white px-6 py-3 rounded-lg hover:bg-indigo-800 transition"
        >
          lihat semua
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {alumni.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-60 object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-black">{item.name}</h3>
              <p className="text-gray-600">{item.achievements}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Alumni;
