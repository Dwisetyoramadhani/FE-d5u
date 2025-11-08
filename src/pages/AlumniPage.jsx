// AlumniPage.jsx
import React, { useState, useEffect, useCallback } from "react";
import { ArrowLeft, Search, Mail, Globe, Hash } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import debounce from "just-debounce-it";
import { fetchAlumni } from "../services/alumni";
import { storageUrl } from "../utils/storage";
import placeholderAvatar from "../assets/avatar.webp";
import mascotAlumni from '../assets/mascot-company.webp';
import rafieImage from '../assets/rafie.webp'
import alulImage from  '../assets/alul.webp'

const AlumniPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [alumniData, setAlumniData] = useState([]);
  const [paginate, setPaginate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const load = useCallback(async ({ q = "", p = 1 } = {}) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetchAlumni({ search: q, page: p });
      setAlumniData(res.items ?? []);
      setPaginate(res.paginate ?? null);
    } catch (err) {
      setError(err.message || "Failed to load alumni");
    } finally {
      setLoading(false);
    }
  }, []);

  const debouncedLoad = useCallback(debounce((q, p) => load({ q, p }), 300), [load]);

  useEffect(() => {
    debouncedLoad(searchTerm, page);
  }, [searchTerm, page, debouncedLoad]);

  const filteredData = alumniData.filter((alumni) =>
    (alumni.name ?? "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#eaf4f6] px-8 py-6">
      {/* Header Section - Tombol Kembali, Judul, Deskripsi & Ilustrasi */}
      <div className="bg-[#d7ebf5] rounded-lg p-6 mb-8 flex items-start gap-4">
        {/* Tombol Kembali */}
        <button
          onClick={() => navigate(-1)}
          className="bg-[#c8dce2] p-2 rounded-full hover:bg-[#b9ced5] transition"
        >
          <ArrowLeft className="w-5 h-5 text-[#0b0b3b]" />
        </button>

        {/* Konten Header */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-[#0b0b3b]">Data Alumni</h2>
          <p className="text-sm text-gray-600 max-w-xl mt-1">
            Daftar alumni SMK Negeri 4 Bojonegoro yang telah menyelesaikan pendidikan dan tersebar di berbagai bidang profesi.
          </p>

          {/* Badge Status */}
          <div className="flex items-center space-x-4 mt-3">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-600 rounded-full" />
              <span className="text-xs text-gray-700">Bersedia</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-400 rounded-full" />
              <span className="text-xs text-gray-700">Tidak Bersedia</span>
            </div>
          </div>
        </div>

        {/* Ilustrasi */}
        <img
          src={mascotAlumni}
          alt="Alumni Illustration"
          className="w-28 h-28 object-contain"
        />
      </div>

      {/* Search Bar */}
      <div className="relative w-full md:w-[400px] mb-6">
        <Search className="absolute left-3 top-3 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Cari nama alumni..."
          className="w-full border border-gray-300 rounded-lg pl-10 py-2 focus:ring-2 focus:ring-[#1d70d1] focus:outline-none"
          value={searchTerm}
          onChange={(e) => { setSearchTerm(e.target.value); setPage(1); }}
        />
      </div>

      {loading && <p className="text-gray-600">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Grid Kartu Alumni */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredData.map((alumni) => (
          <div
            key={alumni.id}
            className="bg-white shadow-md rounded-xl p-4 flex flex-col justify-between hover:shadow-lg transition"
          >
            {/* Foto Alumni */}
            <div className="w-full h-full flex items-center justify-center border-b border-gray-200 mb-3">
              <img
                src={
                  alumni.id === 4
                    ? rafieImage
                    : alumni.id === 3
                    ? alulImage
                    : alumni.photo ||
                      alumni.avatar ||
                      alumni.img ||
                      alumni.image
                    ? storageUrl(
                        alumni.photo ??
                          alumni.avatar ??
                          alumni.img ??
                          alumni.image
                      )
                    : placeholderAvatar
                }
                alt={alumni.name}
                className="w-full h-full object-cover rounded-md"
              />
            </div>

            {/* Status */}
            <span
              className={`inline-block text-xs font-semibold px-3 py-1 rounded-full w-fit mb-2 ${
                (alumni.status === "Bersedia") ||
                (alumni.status === "ready_to_work") ||
                (alumni.status_formatted &&
                  alumni.status_formatted.toLowerCase().includes("ready"))
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {alumni.status_formatted ?? alumni.status ?? "Tidak Diketahui"}
            </span>

            {/* Nama */}
            <h3 className="font-semibold text-[#0b0b3b] text-sm mb-2">
              {alumni.name}
            </h3>

            {/* Pekerjaan / Skills */}
            <p className="text-xs text-gray-600 mb-2">
              <strong>Posisi:</strong> {alumni.skills ?? alumni.position ?? "-"}
            </p>

            {/* Informasi Tambahan */}
            <div className="text-xs text-gray-500 space-y-1 mb-3">
              <div className="flex items-center space-x-1">
                <Hash size={12} />
                <span>#{alumni.id}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Globe size={12} />
                <span>{alumni.work_time_formatted ?? alumni.work_time ?? "-"}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail size={12} />
                <a
                  href={`mailto:${alumni.email}`}
                  className="text-blue-500 hover:underline"
                >
                  {alumni.email}
                </a>
              </div>
            </div>

            {/* Tombol Lihat Detail */}
            <Link
              to={`/alumni/${alumni.id}`}
              className="block text-center bg-[#1d70d1] hover:bg-[#1558a1] text-white text-sm rounded-md py-2 transition"
            >
              Lihat Detail
            </Link>
          </div>
        ))}
      </div>

      {/* pagination controls */}
      {paginate && (
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page <= 1}
            className="px-4 py-2 bg-white text-indigo-900 rounded disabled:opacity-50"
          >
            Prev
          </button>
          <div className="px-4 py-2 bg-white text-indigo-900 rounded">{paginate.current_page} / {paginate.last_page}</div>
          <button
            onClick={() => setPage((p) => Math.min(paginate.last_page, p + 1))}
            disabled={page >= (paginate.last_page ?? 1)}
            className="px-4 py-2 bg-white text-indigo-900 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default AlumniPage;