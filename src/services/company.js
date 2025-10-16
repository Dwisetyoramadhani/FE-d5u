import api from "../utils/Api";

export async function fetchCompanies(params = {}) {
  const res = await api.get('/company', { params });
  const payload = res.data;
  const items = payload?.data?.data ?? [];
  return items;
}

export async function fetchCompanyById(id) {
  const res = await api.get(`/company/${id}`);
  const payload = res.data;
  const item = payload?.data ?? null;
  return item;
}
