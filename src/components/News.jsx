import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchNews } from "../services/news";
import { storageUrl } from "../utils/storage";

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
        {items.slice(0, 3).map((item, index) => (
          <Link
            key={index}
            to={`/news/${item.slug ?? item.id}`}
            className="bg-white text-black rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition block"
          >
            {(item.thumbnail || item.image) && (
              <img
                src={storageUrl(item.thumbnail ?? item.image)}
                alt={item.title}
                className="w-full h-48 sm:h-56 object-cover"
              />
            )}
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
