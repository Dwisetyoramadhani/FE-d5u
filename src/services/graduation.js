import api from "../utils/Api";

export async function checkGraduation(params = {}) {
  const res = await api.get('/graduation/check', { params });
  const payload = res.data;
  return payload?.data ?? null;
}

export async function uploadGraduation(formData) {
  const res = await api.post('/graduation/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  const payload = res.data;
  return payload?.data ?? payload;
}
