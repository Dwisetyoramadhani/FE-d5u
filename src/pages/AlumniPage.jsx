import React, { useState, useEffect } from "react";
import { Search, Mail, Globe, Hash, ArrowRight } from "lucide-react";
import { fetchAlumni } from "../services/alumni";

const AlumniPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [alumniData, setAlumniData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchAlumni()
      .then((data) => {
        if (!mounted) return;
        setAlumniData(data.data ?? data);
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

  const filteredData = alumniData.filter((alumni) =>
    (alumni.name ?? "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F0FAFF] px-10 py-8">
      <div className="flex items-center space-x-4 mb-6">
        <button
          onClick={() => window.history.back()}
          className="text-gray-600 hover:text-black transition"
        >
          9
        </button>
        <h1 className="text-3xl font-bold">Data Alumni</h1>
      </div>

      <div className="flex items-center space-x-6 mb-6">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-600 rounded-full" />
          <span className="text-sm text-gray-700">Bersedia</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-400 rounded-full" />
          <span className="text-sm text-gray-700">Tidak Bersedia</span>
        </div>
      </div>

      <div className="relative w-full md:w-[400px] mb-10">
        <Search className="absolute left-3 top-3 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search..."
          className="w-full border border-gray-300 rounded-lg pl-10 py-2 focus:ring-2 focus:ring-indigo-300 focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredData.map((alumni, index) => (
          <div
            key={alumni.id ?? index}
            className="bg-white rounded-2xl shadow p-5 relative hover:shadow-lg transition"
          >
            <div
              className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${
                (alumni.status === "Bersedia")
                  ? "bg-green-700 text-white"
                  : "bg-red-400 text-white"
              }`}
            >
              {alumni.status}
            </div>

            <div className="flex flex-col items-center mt-6">
              <img
                src={alumni.img ?? alumni.avatar}
                alt={alumni.name}
                className="w-20 h-20 rounded-full border"
              />
              <h3 className="mt-3 font-bold text-center">{alumni.name}</h3>
              <p className="text-sm text-gray-500">{alumni.role}</p>
            </div>

            <div className="bg-[#F2FBFF] border border-gray-200 rounded-lg p-3 mt-4 text-sm">
              <div className="flex items-center space-x-2">
                <Hash size={14} />
                <span>{alumni.id}</span>
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <Globe size={14} />
                <span>{alumni.workType}</span>
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <Mail size={14} />
                <a
                  href={`mailto:${alumni.email}`}
                  className="text-blue-500 hover:underline"
                >
                  {alumni.email}
                </a>
              </div>
            </div>

            <div className="flex justify-end mt-3">
              <a
                href="#"
                className="text-sm font-medium text-gray-700 hover:text-indigo-600 flex items-center space-x-1"
              >
                <span>Lihat detail</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlumniPage;
