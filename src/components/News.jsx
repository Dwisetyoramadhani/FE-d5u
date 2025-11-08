import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchNews } from "../services/news";
import { storageUrl } from "../utils/storage";
import defaultImage from "../assets/images.webp";
import hut from '../assets/hut.webp';
import silat from '../assets/silat.webp';
import assesemen from '../assets/assesemen.webp';

const News = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchNews({ page: 1, per_page: 3 })
      .then(({ items }) => setItems(items || []))
      .catch((err) => setError(err.message || "Failed to load news"))
      .finally(() => setLoading(false));
  }, []);

  // Helper: tentukan gambar berdasarkan id
  const getNewsThumbnail = (item) => {
    if (item.id === 8) return hut;
    if (item.id === 7) return assesemen;
    if (item.id === 6) return silat;
    return item.thumbnail ? storageUrl(item.thumbnail) : defaultImage;
  };

  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (error) return <div className="p-8 text-red-500 text-center">{error}</div>;

  return (
    <section className="bg-[#0B0D52] py-16 px-6 sm:px-10 text-white">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-3">BERITA</h2>
        <p className="text-gray-200 text-lg max-w-2xl mx-auto">
          Berita terkini dan menarik seputar SMK Negeri 4 Bojonegoro
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.slice(0, 3).map((item) => (
          <Link
            key={item.id} // gunakan id sebagai key, bukan index
            to={`/news/${item.slug ?? item.id}`}
            className="bg-white text-black rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition block"
          >
            <img
              src={getNewsThumbnail(item)}
              alt={item.title}
              width={600}
              height={400}
              loading="lazy"
              decoding="async"
              className="w-full h-96 object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = defaultImage;
              }}
            />
            <div className="p-5">
              <p className="text-gray-600 text-sm mb-1">
                {item.created_at
                  ? new Date(item.created_at).toLocaleDateString()
                  : ""}
              </p>
              <h3 className="text-lg font-bold mb-2">
                {item.title || item.heading}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Link
          to="/news"
          className="px-6 py-3 bg-yellow-400 text-indigo-900 rounded font-semibold"
        >
          Lihat Semua
        </Link>
      </div>
    </section>
  );
};

export default News;