import api from "../utils/Api";

export async function fetchNews(params = {}) {
  const res = await api.get('/news', { params });
  return res.data;
}

export async function fetchNewsBySlug(slug) {
  const res = await api.get(`/news/${slug}`);
  return res.data;
}
