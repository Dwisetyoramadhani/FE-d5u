// Gunakan env variable saat produksi, fallback ke localhost saat development
// Tambahkan pada .env.production:
// VITE_API_URL=https://api.smkn4bojonegoro.sch.id/api
// VITE_STORAGE_URL=https://api.smkn4bojonegoro.sch.id/storage
// VITE_LARAVEL_URL=https://api.smkn4bojonegoro.sch.id

export const API_URL = import.meta.env.VITE_API_URL ;
export const STORAGE_URL = import.meta.env.VITE_STORAGE_URL ;
export const LARAVEL_URL = import.meta.env.VITE_LARAVEL_URL ;