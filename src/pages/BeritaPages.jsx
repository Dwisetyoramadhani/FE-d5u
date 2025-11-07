import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { fetchNews } from "../services/news";
import { storageUrl } from "../utils/storage";
import debounce from "just-debounce-it";
import defaultImage from "../assets/images.webp";

const BeritaPage = () => {
  const [newsData, setNewsData] = useState([]);
  const [paginate, setPaginate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const load = useCallback(async ({ q = "", p = 1 } = {}) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetchNews({ search: q, page: p });
      setNewsData(res.items ?? []);
      setPaginate(res.paginate ?? null);
    } catch (err) {
      setError(err.message || "Failed to load news");
    } finally {
      setLoading(false);
    }
  }, []);

  // debounced search
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedLoad = useCallback(debounce((q, p) => load({ q, p }), 300), [load]);

  useEffect(() => {
    let mounted = true;
    if (!mounted) return;
    debouncedLoad(search, page);
    return () => {
      mounted = false;
    };
  }, [search, page, debouncedLoad]);

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
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(1); }}
          className="w-full max-w-xl bg-white px-6 py-3 rounded-lg text-gray-800 text-base outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-400">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
        {newsData.map((item, index) => (
          <Link
            key={index}
            to={`/news/${item.slug ?? item.id}`}
            className="bg-white text-black rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition block"
          >
            <img
                          src={item.thumbnail ? storageUrl(item.thumbnail) : defaultImage}
                          alt={item.title}
                          className="w-full h-96 object-cover"
                          onError={(e) => {
                          e.target.onerror = null; // hindari infinite loop
                          e.target.src = defaultImage;
                          }}
                        />
            <div className="p-5">
              <p className="text-gray-600 text-sm mb-1">
                {item.created_at ? new Date(item.created_at).toLocaleDateString() : ''}
              </p>
              <h3 className="text-lg font-bold mb-2">{item.title || item.heading}</h3>
              {item.desc && (
                <p className="text-gray-700 text-sm mb-3">{item.desc}</p>
              )}
              <p className="text-sm font-medium text-gray-800">
                {item.category}
              </p>
            </div>
          </Link>
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
    </section>
  );
};

export default BeritaPage;
