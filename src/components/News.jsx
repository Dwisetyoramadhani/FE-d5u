import React, { useEffect, useState } from "react";
import { fetchNews } from "../services/news";

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchNews()
      .then((data) => {
        if (!mounted) return;
        // assume API returns array in data.data or data
        setNewsData(data.data ?? data);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err.message || "Failed to load news");
      })
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="bg-[#0B0D52] py-16 px-8 text-white">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-3">BERITA</h2>
        <p className="text-gray-200 text-lg max-w-2xl mx-auto">
          Temukan berita terkini terkait SMK Negeri 4 Bojonegoro yang menarik
          dan ter-update
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Cari berita"
          className="w-full max-w-xl bg-white px-6 py-3 rounded-lg text-gray-800 text-base outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-400">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
        {newsData.map((item, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
          >
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
            )}
            <div className="p-5">
              <p className="text-gray-600 text-sm mb-1">{item.date || item.created_at}</p>
              <h3 className="text-lg font-bold mb-2">{item.title || item.heading}</h3>
              {item.desc && (
                <p className="text-gray-700 text-sm mb-3">{item.desc}</p>
              )}
              <p className="text-sm font-medium text-gray-800">
                {item.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
