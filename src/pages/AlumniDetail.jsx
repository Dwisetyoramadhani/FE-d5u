
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAlumniById } from '../services/alumni';
import { storageUrl } from '../utils/storage';
import placeholder from '../assets/avatar.jpg';

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

  const skills = alumni.skills || alumni.position || 'Belum diisi';
  const experienceLevel = alumni.experience_level || '-';
  const availability = (alumni.status_formatted && alumni.status_formatted.toLowerCase().includes('ready')) ? 'Bersedia untuk kolaborasi' : 'Tidak tersedia';
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
            <h2 className="text-lg font-bold text-gray-800 mb-4">More Information :</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Keahlian</label>
                <p className="font-semibold text-gray-800">{skills}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Experience Level</label>
                <p className="font-semibold text-gray-800">{experienceLevel}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Email</label>
                <p className="font-semibold text-gray-800">{alumni.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Ketersediaan</label>
                <p className="font-semibold text-gray-800">{availability}</p>
              </div>
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
                      className="text-pink-600 hover:text-pink-800"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 3c2.71 0 5 1.29 5 3s-2.29 3-5 3-5-1.29-5-3 2.29-3 5-3zm0 14.2c-2.67 0-8-1.34-8-4v-2.4c0-1.12 1.24-2 2.5-2h1.06c1.62 0 2.72 1.12 2.72 2.72v.3c0 2.72 1.24 4.28 2.72 4.28v.2c0 1.12 1.24 2 2.5 2h1.06c1.62 0 2.72 1.12 2.72 2.72v.3c0 2.72-1.24 4.28-2.72 4.28v.2c0 1.12-1.24 2-2.5 2h-1.06c-1.62 0-2.72-1.12-2.72-2.72v-.3c0-2.72-1.24-4.28-2.72-4.28v-.2c0-1.12-1.24-2-2.5-2H6.5c-1.26 0-2.5 1.12-2.5 2.72v.3c0 2.72 1.24 4.28 2.72 4.28z"/>
                      </svg>
                    </a>
                  )}
                  {linkedin && (
                    <a
                      href={`https://linkedin.com/in/${linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.55v-5.895c0-1.418-.034-3.233-1.96-3.233-1.96 0-2.27.77-2.27 2.85V20.452h-3.55V11.006h3.414v1.298h.049c0 1.856 1.217 2.914 2.98 2.914v-.049h.048V20.452h3.55zM5.734 7.742c-1.134 0-2.058-.924-2.058-2.058s.924-2.058 2.058-2.058 2.058.924 2.058 2.058-.924 2.058-2.058 2.058zm1.776 3.256h-3.55V11.006h3.55z"/>
                      </svg>
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