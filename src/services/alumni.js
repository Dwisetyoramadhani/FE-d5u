import api from "../utils/Api";

export async function fetchAlumni(params = {}) {
  const res = await api.get('/alumni', { params });
  const payload = res.data;
  const items = payload?.data?.data ?? [];
  const paginate = payload?.data?.paginate ?? payload?.data?.pagination ?? null;
  return { items, paginate };
}

export async function fetchAlumniById(id) {
  const res = await api.get(`/alumni/${id}`);
  const payload = res.data;
  const item = payload?.data ?? null;
  return item;
}

export async function fetchLatestForLanding(params = {}) {
  const res = await api.get('/landing/alumni', { params });
  const payload = res.data;
  const items = payload?.data?.data ?? payload?.data ?? [];
  return items;
}
