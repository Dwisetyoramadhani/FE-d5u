import api from "../utils/Api";

export async function fetchCompanies(params = {}) {
  const res = await api.get('/company', { params });
  return res.data;
}

export async function fetchCompanyById(id) {
  const res = await api.get(`/company/${id}`);
  return res.data;
}
