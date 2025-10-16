import api from "../utils/Api";

export async function checkGraduation(params = {}) {
  const res = await api.get('/graduation/check', { params });
  return res.data;
}

export async function uploadGraduation(formData) {
  const res = await api.post('/graduation/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  return res.data;
}
