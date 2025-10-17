import api from "../utils/Api";

// fetchNews: returns array of news items (KISS)
export async function fetchNews(params = {}) {
  const res = await api.get('/news', { params });
  // backend shape: { meta, data: { paginate, data: [ ... ] }, success }
  const payload = res.data;
  const items = payload?.data?.data ?? [];
  const paginate = payload?.data?.paginate ?? null;
  return { items, paginate };
}

// fetch single news by slug -> return object or null
export async function fetchNewsBySlug(slug) {
  const res = await api.get(`/news/${slug}`);
  const payload = res.data;
  const item = payload?.data ?? null;
  return item;
}
