import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchLatestForLanding } from "../services/alumni";
import { storageUrl } from "../utils/storage";
import placeholder from "../assets/foto-lulusan.png";

const Alumni = () => {
  const [alumni, setAlumni] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchLatestForLanding()
      .then((items) => {
        if (!mounted) return;
        setAlumni(items);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err.message || "Failed to load alumni");
      })
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, []);

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

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {alumni.map((item, index) => (
          <div
            key={item.id ?? index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={item.photo ? storageUrl(item.photo) : placeholder}
              alt={item.name}
              className="w-full h-60 object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-black">{item.name}</h3>
              <p className="text-gray-600">
                {item.work_time_formatted ?? item.work_time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Alumni;
