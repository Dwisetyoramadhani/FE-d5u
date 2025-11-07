
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAlumniById } from '../services/alumni';
import { storageUrl } from '../utils/storage';
import placeholder from '../assets/avatar.webp';

const AlumniDetail = () => {
  const { id } = useParams();
  const [alumni, setAlumni] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchAlumniById(id)
      .then((data) => setAlumni(data))
      .catch((err) => setError(err.message || 'Gagal memuat data alumni'))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <p className="text-blue-900 font-semibold">Memuat profil alumni...</p>
    </div>
  );

  if (error) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <p className="text-red-600">Error: {error}</p>
    </div>
  );

  if (!alumni) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <p className="text-gray-600">Alumni tidak ditemukan.</p>
    </div>
  );

  const skills = alumni.skills ?? 'Belum diisi';
  const description = alumni.description ?? 'Belum diisi';
  const instagram = alumni.social_media?.instagram;
  const linkedin = alumni.social_media?.linkedin;

  return (
    <div className="min-h-screen bg-blue-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="mb-6 text-blue-700 hover:text-blue-900 font-medium flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Kembali ke Daftar Alumni
        </button>

        {/* Main Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Left Panel - Foto & Info Dasar */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-100 mb-4">
              <img
                src={alumni.photo ? storageUrl(alumni.photo) : placeholder}
                alt={alumni.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-xl font-bold text-gray-800">{alumni.name}</h1>
            <p className="text-sm text-gray-500 mt-1">{alumni.email}</p>
            <div className="mt-4 px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
              {alumni.status_formatted}
            </div>
            <div className="mt-2 px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
              {alumni.work_time_formatted}
            </div>
          </div>
          {/* Right Panel - More Information */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Informasi lain:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Email</label>
                <p className="font-semibold text-gray-800">{alumni.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Keahlian</label>
                <p className="font-semibold text-gray-800">{skills}</p>
              </div>
            </div>
            {/* Deskripsi */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-500 mb-1">Deskripsi</label>
              <p className="text-gray-800 leading-relaxed">{description}</p>
            </div>
            {/* Social Media Icons */}
            {(instagram || linkedin) && (
              <div className="mt-6 pt-4 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-500 mb-3">Media Sosial</h3>
                <div className="flex space-x-4">
                  {instagram && (
                    <a
                      href={`https://instagram.com/${instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-600 hover:text-pink-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 rounded"
                      aria-label="Instagram"
                      title="Instagram"
                    >
                      {/* Instagram icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-7 h-7"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3z" />
                        <path d="M12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" />
                        <circle cx="17.5" cy="6.5" r="1" />
                      </svg>
                      <span className="sr-only">Instagram</span>
                    </a>
                  )}
                  {linkedin && (
                    <a
                      href={`https://linkedin.com/in/${linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded"
                      aria-label="LinkedIn"
                      title="LinkedIn"
                    >
                      {/* LinkedIn icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.2 2.3-2.47 4.73-2.47 5.06 0 6 3.33 6 7.66V24h-5v-7.6c0-1.81-.03-4.14-2.52-4.14-2.52 0-2.9 1.97-2.9 4V24h-5V8z" />
                      </svg>
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Prestasi Section */}
        {alumni.achievements && alumni.achievements.length > 0 && (
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Prestasi</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {alumni.achievements.map((ach, idx) => (
                <li key={idx}>{ach}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AlumniDetail;