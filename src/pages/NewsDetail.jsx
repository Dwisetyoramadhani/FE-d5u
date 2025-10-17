import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { fetchNewsBySlug, fetchNews } from "../services/news";
import { storageUrl } from "../utils/storage";

const NewsDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [latest, setLatest] = useState([]);
  const [latestLoading, setLatestLoading] = useState(false);

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
        setError(err.message || "Failed to load news");
      })
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, [slug]);

  useEffect(() => {
    let mounted = true;
    setLatestLoading(true);
    // fetch latest 2 items for right column
    fetchNews({ page: 1, per_page: 2 })
      .then(({ items }) => {
        if (!mounted) return;
        setLatest(items || []);
      })
      .catch(() => {
        if (!mounted) return;
        setLatest([]);
      })
      .finally(() => mounted && setLatestLoading(false));

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-500">{error}</div>;
  if (!item) return <div className="p-8">Berita tidak ditemukan</div>;

  // helper to parse date (try several fields)
  const publishDate = item.published_at || item.date || item.created_at || null;
  const formattedDay = publishDate ? new Date(publishDate).getDate() : null;
  const formattedMonth = publishDate
    ? new Date(publishDate).toLocaleString("id-ID", { month: "short" })
    : null;

  return (
    <section className="bg-[#F4FAFF] min-h-screen px-6 md:px-20 py-10">
      <div className="flex items-center space-x-2 mb-6">
        <button onClick={() => navigate(-1)} className="text-2xl font-bold">
          ←
        </button>
        <h1 className="text-3xl font-bold text-black">Berita</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <div className="relative">
            {item.thumbnail && (
              <img
                src={storageUrl(item.thumbnail)}
                alt={item.title}
                className="rounded-xl w-full h-96 object-cover"
              />
            )}

            {formattedDay && (
              <div className="absolute bottom-3 left-3 bg-yellow-400 text-center rounded-md px-3 py-2">
                <p className="font-semibold text-lg leading-none">{formattedDay}</p>
                <p className="text-sm">{formattedMonth}</p>
              </div>
            )}
          </div>

          <div className="mt-6">
            <h2 className="text-xl md:text-2xl font-bold mb-3">{item.title}</h2>
            <div className="prose max-w-none text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.content ?? item.body ?? '' }} />
          </div>
        </div>

        <aside className="space-y-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-bold mb-3">Berita Terbaru</h3>

            {latestLoading && <div>Loading...</div>}

            {!latestLoading && latest.length === 0 && (
              <p className="text-sm text-gray-500">Tidak ada berita terbaru</p>
            )}

            {!latestLoading && latest.map((n) => (
              <Link key={n.slug || n.id} to={`/news/${n.slug || n.id}`} className="flex gap-4 items-center bg-white p-3 rounded-lg hover:shadow-md transition">
                <img src={storageUrl(n.thumbnail)} alt={n.title} className="w-20 h-14 object-cover rounded-md" />
                <div>
                  <span className="bg-yellow-400 text-xs px-2 py-1 rounded-md text-gray-800 font-semibold">
                    {n.published_at ? new Date(n.published_at).toLocaleDateString("id-ID") : ''}
                  </span>
                  <h4 className="text-sm font-bold mt-2">{n.title}</h4>
                </div>
              </Link>
            ))}
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-bold mb-3">Sorotan</h3>
            <p className="text-sm text-gray-600">Lihat berita dan pengumuman penting lainnya di sini.</p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default NewsDetail;
