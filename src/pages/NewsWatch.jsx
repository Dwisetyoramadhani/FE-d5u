import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchNewsBySlug } from "../services/news";
import { storageUrl } from "../utils/storage";
import defaultImage from "../assets/images.webp";
const NewsWatch = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchNewsBySlug(slug)
      .then((data) => {
        if (!mounted) return;
        setItem(data);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err.message || "Gagal memuat berita");
      })
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, [slug]);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  if (loading) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <p className="text-blue-900 font-semibold">Memuat berita...</p>
    </div>
  );

  if (error) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <p className="text-red-600">Error: {error}</p>
    </div>
  );

  if (!item) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <p className="text-gray-500">Berita tidak ditemukan.</p>
    </div>
  );

  return (
    <section className="bg-[#F4FAFF] min-h-screen px-6 md:px-20 py-10">
      <div className="flex items-center space-x-2 mb-6">
        <button
          onClick={() => navigate(-1)}
          className="text-2xl font-bold"
        >
          ←
        </button>
        <h1 className="text-3xl font-bold text-black">Berita</h1>
      </div>

      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <img
            src={item.thumbnail ? storageUrl(item.thumbnail) : defaultImage}
            alt={item.title}
            className="w-full h-96 object-cover"
            onError={(e) => {
              e.target.onerror = null; // hindari infinite loop
              e.target.src = defaultImage;
            }}
          />

        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h2>
          <p className="text-sm text-gray-500 mb-4">
            Dipublikasikan pada {formatDate(item.created_at)}
          </p>
          <div
            className="prose max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: item.content ?? item.body ?? '' }}
          />
        </div>
      </div>
    </section>
  );
};

export default NewsWatch;