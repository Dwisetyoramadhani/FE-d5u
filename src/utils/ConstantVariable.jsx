// Konfigurasi URL berbasis environment Vite.
// Catatan:
// - Saat development: Vite otomatis memuat .env.development
// - Saat build/production: Vite memuat .env.production
// - Prefix variabel harus VITE_ agar tersedia di import.meta.env
//
// Contoh .env.production:
// VITE_API_URL=https://api.smkn4bojonegoro.sch.id/api
// VITE_STORAGE_URL=https://api.smkn4bojonegoro.sch.id/storage
// VITE_LARAVEL_URL=https://api.smkn4bojonegoro.sch.id
//
// Contoh .env.development (opsional, untuk lokal):
// VITE_API_URL=http://localhost:8000/api
// VITE_STORAGE_URL=http://localhost:8000/storage
// VITE_LARAVEL_URL=http://localhost:8000

export const API_URL = import.meta.env.VITE_API_URL;
export const STORAGE_URL = import.meta.env.VITE_STORAGE_URL;
export const LARAVEL_URL = import.meta.env.VITE_LARAVEL_URL;