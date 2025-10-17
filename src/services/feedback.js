import api from "../utils/Api";

export async function sendFeedback(payload) {
  const res = await api.post('/feedback', payload);
  const data = res.data;
  // return normalized response
  return data?.data ?? data;
}
