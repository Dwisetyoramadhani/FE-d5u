import { STORAGE_URL } from './ConstantVariable';

export function storageUrl(path) {
  if (!path) return null;
  const str = String(path);
  // if already full URL, return as-is
  if (/^https?:\/\//i.test(str)) return str;

  const base = String(STORAGE_URL).replace(/\/+$/, '');
  const normalized = str.replace(/^\/+/, '');
  return `${base}/${normalized}`;
}

export default storageUrl;
