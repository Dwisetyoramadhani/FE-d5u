import api from "../utils/Api";

export async function fetchAlumni(params = {}) {
  const res = await api.get('/alumni', { params });
  return res.data;
}

export async function fetchAlumniById(id) {
  const res = await api.get(`/alumni/${id}`);
  return res.data;
}
